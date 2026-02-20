/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#780000",
        "brand-primary-hover": "#5C0000",
        "brand-dark": "#410303",
        "brand-cta": "#B21C0E",
        "brand-cta-hover": "#961709",
        "text-dark": "#2B3437",
        "text-black": "#000000",
        "locations-bg": "#F9F3F3",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #780000, #410303)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        "stack-notch": ["Stack Sans Notch", "sans-serif"],
      },
      fontSize: {
        "hero-desktop": ["62px", {
          lineHeight: "1.2em",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        }],
        "hero-mobile": ["40px", {
          lineHeight: "1.2em",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        }],
        "subtitle-desktop": ["20px", {
          lineHeight: "1.5em",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        }],
        "subtitle-mobile": ["18px", {
          lineHeight: "1.5em",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        }],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1472px",
        },
      },
      borderRadius: {
        pill: "22px",
      },
    },
  },
  plugins: [],
};
