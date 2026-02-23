import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        ink: "#0b0c12",
        gold: {
          "50": "#fefbe9",
          "100": "#fcf5c8",
          "200": "#faea91",
          "300": "#f7d95d",
          "400": "#f2c135",
          "500": "#d9a51a",
          "600": "#b68316",
          "700": "#946517",
          "800": "#7a501a",
          "900": "#68431c",
          "950": "#3d250c"
        },
        "brand": {
          "cyan": "#008ba3",
          "jade": "#00c292"
        },
        "vibrant": {
          "cyan": "#00D2FF",
          "jade": "#00F0B5"
        }
      },
      boxShadow: {
        "soft-gold": "0 0 40px 0px rgba(217, 165, 26, 0.15)",
        soft: "0 20px 60px rgba(15, 23, 42, 0.35)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02), transparent 40%)",
        "halo": "radial-gradient(ellipse at 50% 30%, rgba(217, 165, 26, 0.1), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
