import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      IbarraRealNova: ["IbarraRealNova", "serif"],
      NotoSans: ["NotoSans", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      "white": "#ffffff",
      "black": "#00040d",
      "neutral": "#ccccdcf",
      "light": "#e6e6e7",
      
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
