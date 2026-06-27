/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Be Vietnam Pro covers both body and display weights
        sans: ["var(--font-be)", "system-ui", "sans-serif"],
        display: ["var(--font-be)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#111111",   // repurposed as primary action colour
          blue:   "#111111",
          dark:   "#111111",
          gray:   "#4B5563",
          subtle: "#9CA3AF",
          light:  "#FFFFFF",
          border: "#E5E7EB",
        },
      },
      boxShadow: {
        // Keep a single, very subtle card shadow — no glows
        card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 8px rgba(0,0,0,0.03)",
      },
      borderRadius: {
        "3xl": "24px",
      },
      maxWidth: {
        "8xl": "1400px",
      },
      animation: {
        "float": "floatY 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
