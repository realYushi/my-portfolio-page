import fs from 'fs';
import path from 'path';
import { gzip, brotliCompress } from 'zlib';
import { promisify } from 'util';

const gzipAsync = promisify(gzip);
const brotliAsync = promisify(brotliCompress);

const distDir = 'dist';
const compressionThreshold = 1024; // Only compress files larger than 1KB

async function compressFile(filePath, content) {
  const stats = fs.statSync(filePath);
  
  if (stats.size < compressionThreshold) {
    return;
  }

  try {
    // Generate gzip version
    const gzipped = await gzipAsync(content, { level: 9 });
    const gzipPath = `${filePath}.gz`;
    fs.writeFileSync(gzipPath, gzipped);
    
    const gzipSavings = ((stats.size - gzipped.length) / stats.size * 100).toFixed(1);
    console.log(`✓ ${path.relative(distDir, filePath)} → ${(gzipped.length / 1024).toFixed(1)}KB (${gzipSavings}% smaller)`);

    // Generate brotli version
    const brotlied = await brotliAsync(content);
    const brotliPath = `${filePath}.br`;
    fs.writeFileSync(brotliPath, brotlied);
    
  } catch (error) {
    console.error(`Error compressing ${filePath}:`, error);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      walkDirectory(filePath);
    } else {
      // Only compress text-based files
      const ext = path.extname(file).toLowerCase();
      if (['.js', '.css', '.html', '.json', '.txt', '.xml', '.svg'].includes(ext)) {
        const content = fs.readFileSync(filePath);
        compressFile(filePath, content);
      }
    }
  }
}

console.log('🗜️  Compressing assets for GitHub Pages...');
walkDirectory(distDir);
console.log('✅ Compression complete!');