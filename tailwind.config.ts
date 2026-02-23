import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0c12",
        glow: "#6c5ce7",
        sky: "#4dd0ff",
        ember: "#ff8a65",
        mint: "#7ef7c8"
      },
      boxShadow: {
        glow: "0 0 40px rgba(108, 92, 231, 0.35)",
        soft: "0 20px 60px rgba(15, 23, 42, 0.35)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top, rgba(108,92,231,0.35), rgba(11,12,18,0.2) 50%, rgba(11,12,18,0.95) 100%)",
        "halo": "radial-gradient(circle at 20% 20%, rgba(77,208,255,0.35), transparent 55%), radial-gradient(circle at 80% 30%, rgba(126,247,200,0.28), transparent 50%), radial-gradient(circle at 50% 80%, rgba(255,138,101,0.2), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
