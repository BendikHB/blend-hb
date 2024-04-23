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
      "black": "#191D1B",
      "dark": "#242F2B",
      "light": "#F7F7F2",
      "green": "#899878",
      "sand": "#EAEBDC",
      
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
