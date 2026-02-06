/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#5a2d8b",
        "primary-dark": "#3e1f60",
        "accent": "#F59E0B", // Keeping for internal consistency if used elsewhere
        "gold-roadmap": "#D4AF37", // Part 2 Gold
        "gold-action": "#fbbf24",  // Part 3 Gold
        "gold-action-hover": "#f59e0b",
        "background-light": "#f7f6f8", // Updated
        "background-dark": "#19141e",
        "surface-light": "#ffffff",
        "surface-dark": "#2a2430",
        "off-white": "#faf9fb",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      boxShadow: {
        "premium": "0 10px 40px -10px rgba(90, 45, 139, 0.1)",
        "glow": "0 0 15px rgba(212, 175, 55, 0.3)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
