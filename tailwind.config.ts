import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },
    extend: {
      colors: {
        primary: "#1B3A4B",
        secondary: "#3D8B8B",
        accent: "#FAFAFA",
        dark: "#2D2D2D",
        light: "#E8E8E8",
        foreground: "#1A1A1A",
        muted: "#6B7280",
        surface: "#F5F5F5",
      },
      boxShadow: {
        soft: "0 12px 40px -24px rgba(27, 58, 75, 0.24)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        "2xl": "1.5rem",
      },
      backgroundImage: {
        "radial-soft":
          "radial-gradient(circle at top left, rgba(61, 139, 139, 0.18), transparent 38%)",
      },
    },
  },
  plugins: [],
};

export default config;
