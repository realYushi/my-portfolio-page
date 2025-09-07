/**
 * Opens an external URL in a new tab with proper security settings
 */
export const openExternalUrl = (url: string): void => {
  window.open(url, "_blank", "noopener,noreferrer");
};

/**
 * Scrolls smoothly to a section by ID
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: "smooth" });
};

/**
 * Opens an email client with a pre-filled email address
 */
export const openEmailClient = (email: string): void => {
  window.location.href = `mailto:${email}`;
};