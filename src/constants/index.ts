// Social links and external URLs
export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/realYushi",
  LINKEDIN: "https://www.linkedin.com/in/yushi-c-6043aa285/",
  BLOG: "https://blog.yushi91.com",
} as const;

// Contact information
export const CONTACT = {
  EMAIL: "realyushi@gmail.com",
} as const;

// Navigation sections
export const NAVIGATION_SECTIONS = {
  APPROACH: "approach",
  CAPABILITIES: "capabilities",
  CASE_STUDIES: "case-studies",
  CONTACT: "contact",
} as const;

// Animation settings
export const ANIMATION_CONFIG = {
  SCROLL_THRESHOLD: 0.2,
  STAGGER_DELAY: 150,
  HERO_ANIMATION_DELAYS: {
    SUBHEADING: 200,
    LOCATION: 350,
    DESCRIPTION: 450,
    CTA: 500,
  },
} as const;

// Asset paths
export const ASSETS = {
  RESUME: `${import.meta.env.BASE_URL}resume.pdf`,
  PROFILE_IMAGE: `${import.meta.env.BASE_URL}me.jpeg`,
} as const;
