import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "auto-sm": "repeat(auto-fit,minmax(230px,1fr))",
        "auto-md": "repeat(auto-fit,minmax(300px,1fr))",
      },
      padding: {
        xs: "5px",
        sm: "10px",
        md: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
      gap: {
        xs: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
      },
      boxShadow: {
        sm: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        xl: "  rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        xxl: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
      },
      borderColor: {
        light: "#cbd5e1",
        default: "#cbd5e1",
        dark: "#94a3b8",
      },
      borderWidth: {
        xs: "0.2px",
        sm: "0.5px",
        md: "1px",
        lg: "2px",
        xl: "4px",
      },
      colors: {
        orange: {
          default: '#f97316'
        },
        yellow: {
          default: "#eab308",
        },
        black: {
          light: "#111827",
          dark: "#030712"
        },
        gray: {
          default: "#9ca3af",
          dark: "#6b7280",
          light: "#d1d5db",
        },
        blue: {
          light: "#2563eb",
          default: "#1d4ed8",
          dark: "#1e40af"
        }
      },
    },
  },

  plugins: [],
};
export default config;