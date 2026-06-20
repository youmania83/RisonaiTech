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
          purple: "#4F46E5",
          blue: "#2563EB",
          dark: "#0F172A",
          gray: "#4B5563",
          subtle: "#9CA3AF",
          light: "#FFFFFF",
          border: "#E2E8F0",
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,23,42,0.03), 0 4px 16px rgba(15,23,42,0.015)",
        "card-hover":
          "0 0 0 1px rgba(79,70,229,0.08), 0 12px 30px rgba(15,23,42,0.03), 0 0 80px rgba(79,70,229,0.015)",
        glow: "0 0 50px rgba(79,70,229,0.08)",
        "glow-sm": "0 0 24px rgba(79,70,229,0.05)",
        "purple-lg": "0 8px 40px rgba(79,70,229,0.15)",
        premium: "0 0 0 1px rgba(79,70,229,0.05), 0 16px 40px rgba(15,23,42,0.02), 0 0 120px rgba(79,70,229,0.01)",
        "premium-hover": "0 0 0 1px rgba(79,70,229,0.12), 0 20px 50px rgba(15,23,42,0.05), 0 0 140px rgba(79,70,229,0.03)",
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
