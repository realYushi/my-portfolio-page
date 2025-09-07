# Yushi Cui - Portfolio Website

A modern, interactive portfolio website showcasing full-stack development expertise with stunning visual effects and smooth animations.

## ✨ Features

### 🎨 Visual Design
- **Dynamic Light Ray Effects**: WebGL-powered animated light rays with responsive mobile optimization
- **Smooth Scroll Animations**: Staggered entrance animations triggered by viewport intersection
- **Seamless Section Transitions**: Blur transitions between sections for professional polish
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Dark/Light Theme Support**: Built with Catppuccin color scheme (Latte/Mocha variants)

### 🚀 Performance
- **Lazy Loading**: Below-the-fold components loaded on demand
- **Optimized Animations**: Hardware-accelerated CSS transforms and WebGL rendering
- **Efficient Bundling**: Vite-powered build with automatic code splitting
- **Compressed Assets**: Gzip and Brotli compression for optimal loading speeds
- **Mobile Performance**: Disabled mouse tracking and optimized parameters for mobile devices

### 📱 Interactive Elements
- **Staggered Entrance Animations**: 
  - Hero section: Heading → Subheading → Location → Description → CTA (200-500ms delays)
  - Card sections: Scroll-triggered with 150-200ms stagger delays
- **Smooth Transitions**: 600ms ease-out animations throughout
- **Responsive Light Rays**: Adaptive parameters for mobile vs desktop experience
- **Professional UI Components**: Custom-built with Radix UI primitives

### 🛠 Technical Stack

#### Frontend
- **React 18** with TypeScript
- **Vite** for lightning-fast development and building
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible, unstyled components
- **Lucide React** for consistent iconography

#### 3D Graphics & Animation
- **OGL (WebGL Library)** for high-performance light ray effects
- **Custom Shaders** for dynamic visual effects
- **Intersection Observer API** for scroll-triggered animations
- **CSS Keyframe Animations** for smooth transitions

#### Build & Deployment
- **GitHub Actions** for automated deployment
- **GitHub Pages** with custom domain support
- **Asset Optimization** with automatic compression
- **TypeScript** for type safety and developer experience

## 🏗 Architecture

### Component Structure
```
src/
├── components/
│   ├── layout/
│   │   └── Header.tsx              # Navigation header
│   ├── sections/
│   │   ├── HeroSection.tsx         # Main hero with light rays & animations
│   │   ├── CapabilitiesSection.tsx # Skills showcase with scroll animations
│   │   ├── CaseStudiesSection.tsx  # Project highlights
│   │   ├── ApproachSection.tsx     # Development philosophy
│   │   └── ContactFooter.tsx       # Contact information
│   └── ui/
│       ├── lightRays.tsx           # WebGL light ray component
│       └── [shadcn components]     # Reusable UI primitives
├── hooks/
│   └── use-scroll-animation.ts     # Custom hook for scroll-triggered animations
├── providers/
│   └── ThemeProvider.tsx           # Dark/light theme management
└── utils/
    └── toast.ts                    # Notification utilities
```

### Animation System
- **Hero Entrance**: Sequential element animations with precise timing
- **Scroll Animations**: Intersection Observer-based triggers with staggered delays
- **Section Transitions**: Blur overlays for seamless visual flow
- **Performance Optimized**: Respects `prefers-reduced-motion` settings

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone https://github.com/realYushi/my-portfolio-page.git
cd my-portfolio-page

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts
```bash
# Development
pnpm dev              # Start dev server with HMR
pnpm build:dev        # Build for development
pnpm preview          # Preview production build

# Production
pnpm build            # Build and optimize for GitHub Pages
pnpm deploy           # Build and deploy to GitHub Pages

# Quality
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript compiler check
```

## 🎯 Key Implementations

### 1. WebGL Light Ray System
- Custom fragment shaders for dynamic light effects
- Mobile-optimized parameters (longer rays, no mouse tracking)
- Intersection Observer for performance optimization
- Responsive brightness calculations

### 2. Scroll Animation Framework
```typescript
const { containerRef, getItemClass } = useScrollAnimation(itemCount, {
  staggerDelay: 200,
  threshold: 0.2,
});
```

### 3. Responsive Design Strategy
- Mobile-first CSS with progressive enhancement
- Conditional parameters based on screen size detection
- Optimized hover effects and transitions
- Performance-conscious mobile animations

### 4. Build Optimization
- Lazy loading for non-critical components
- Automatic asset compression (Gzip + Brotli)
- Efficient code splitting and tree shaking
- Optimized font loading with `@fontsource`

## 📊 Performance Metrics
- **First Contentful Paint**: Optimized with lazy loading
- **Largest Contentful Paint**: Hero section prioritized
- **Cumulative Layout Shift**: Minimized with proper sizing
- **Animation Frame Rate**: 60fps with WebGL acceleration

## 🎨 Design System

### Typography
- **Headings**: Bricolage Grotesque (700-800 weight)
- **Body Text**: Inter (400-600 weight)
- **Responsive Scaling**: `clamp()` functions for fluid typography

### Colors (Catppuccin)
- **Light Theme**: Latte variant
- **Dark Theme**: Mocha variant
- **Accent**: Mauve (#8839ef)
- **Secondary**: Teal, Peach variants

### Animations
- **Duration**: 600ms standard
- **Easing**: `ease-out` for natural feel
- **Stagger Delays**: 150-300ms for sequential effects

## 🔧 Customization

### Light Ray Configuration
```typescript
<LightRays
  raysOrigin="top-center"
  raysColor="#8839ef"
  lightSpread={isMobile ? 1.0 : 1.2}
  rayLength={isMobile ? 3.5 : 2.5}
  fadeDistance={isMobile ? 4.0 : 3.0}
  // ... more options
/>
```

### Animation Timing
```typescript
// Hero section stagger delays
const timings = {
  heading: 0,
  subheading: 200,
  location: 350,
  description: 450,
  cta: 500
};
```

## 📱 Browser Support
- **Modern Browsers**: Chrome 91+, Firefox 90+, Safari 14+
- **WebGL Support**: Required for light ray effects
- **Mobile**: iOS 14+, Android Chrome 91+
- **Fallbacks**: Graceful degradation for unsupported features

## 🚢 Deployment
Automatically deployed to GitHub Pages via GitHub Actions on every push to main branch.

**Live Site**: [https://yushi.dev](https://yushi.dev)

## 📝 License
This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing
While this is a personal portfolio, feedback and suggestions are welcome! Feel free to open issues for bugs or feature requests.

---

**Built with ❤️ by Yushi Cui** - Full-Stack Developer focused on creating exceptional user experiences through clean, scalable code.