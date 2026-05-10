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
          dark: "#FFFFFF",
          gray: "rgba(255,255,255,0.58)",
          subtle: "rgba(255,255,255,0.32)",
          light: "#090C18",
          border: "rgba(255,255,255,0.08)",
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.3), 0 4px 24px rgba(0,0,0,0.4)",
        "card-hover":
          "0 0 0 1px rgba(99,91,255,0.12), 0 12px 50px rgba(0,0,0,0.55), 0 0 80px rgba(99,91,255,0.07)",
        glow: "0 0 50px rgba(99,91,255,0.28)",
        "glow-sm": "0 0 24px rgba(99,91,255,0.2)",
        "purple-lg": "0 8px 40px rgba(99,91,255,0.45)",
        premium: "0 0 0 1px rgba(99,91,255,0.08), 0 20px 60px rgba(0,0,0,0.4), 0 0 120px rgba(99,91,255,0.04)",
        "premium-hover": "0 0 0 1px rgba(99,91,255,0.14), 0 24px 80px rgba(0,0,0,0.55), 0 0 140px rgba(99,91,255,0.08)",
      },
      borderRadius: {
        "3xl": "24px",
      },
      maxWidth: {
        "8xl": "1400px",
      },
      animation: {
        "float": "floatY 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "gradient-drift": "gradientMove 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
