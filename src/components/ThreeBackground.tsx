"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Create geometric pattern
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6750a4,
      shininess: 100,
      transparent: true,
      opacity: 0.8
    });

    const particles: THREE.Mesh[] = [];
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(geometry, material.clone());
      
      // Position particles in a spherical pattern
      const radius = 5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      particle.position.x = radius * Math.sin(phi) * Math.cos(theta);
      particle.position.y = radius * Math.sin(phi) * Math.sin(theta);
      particle.position.z = radius * Math.cos(phi);
      
      particle.scale.setScalar(0.5 + Math.random() * 1.5);
      particle.userData.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
      particle.userData.originalPosition = particle.position.clone();
      
      scene.add(particle);
      particles.push(particle);
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add point lights for highlights
    const pointLight1 = new THREE.PointLight(0x2090ee, 0.7, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xe8def8, 0.5, 15);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Camera position
    camera.position.z = 15;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate particles
      particles.forEach(particle => {
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.005;
        
        // Gentle floating movement
        particle.position.add(particle.userData.velocity);
        
        // Return to original position with slight variation
        const returnForce = 0.01;
        particle.position.lerp(particle.userData.originalPosition, returnForce);
      });

      // Slow camera rotation
      camera.position.x = Math.sin(Date.now() * 0.0003) * 2;
      camera.position.y = Math.cos(Date.now() * 0.0002) * 2;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      
      particles.forEach(particle => {
        scene.remove(particle);
        particle.geometry.dispose();
        (particle.material as THREE.Material).dispose();
      });
      
      scene.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};