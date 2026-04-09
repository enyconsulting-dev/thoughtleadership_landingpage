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
        "tlbs-black": "#0A0A0A",
        "tlbs-dark": "#111111",
        "tlbs-card": "#161616",
        "tlbs-border": "#222222",
        "tlbs-gold": "#C8A24E",
        "tlbs-gold-lt": "#DFC070",
        "tlbs-gold-deep": "#A67C2E",
        "tlbs-cream": "#F5EFE4",
        "tlbs-cream-lt": "#FAF7F2",
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
      fontSize: {
        "tlbs-display": "clamp(2.4rem,4.5vw,3.8rem)",
        "tlbs-section": "clamp(1.8rem,3vw,2.6rem)",
      },
      borderRadius: {
        tlbs: "2px",
      },
      boxShadow: {
        "tlbs-glow": "0 0 60px rgba(200, 162, 78, 0.22)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
