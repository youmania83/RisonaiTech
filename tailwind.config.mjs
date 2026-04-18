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
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        brand: {
          purple: "#635BFF",
          blue: "#0EA5E9",
          dark: "#0A0A0A",
          gray: "#6B7280",
          subtle: "#9CA3AF",
          light: "#F7F9FC",
          border: "#E5E7EB",
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.05)",
        "card-hover": "0 8px 40px rgba(99,91,255,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        glow: "0 0 40px rgba(99,91,255,0.18)",
      },
      borderRadius: {
        "3xl": "24px",
      },
      maxWidth: {
        "8xl": "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
