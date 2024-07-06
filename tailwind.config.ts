import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5C87F6",
        "white-2": "#E2EAFD",
        "white-3": "#ACB5C7",
        "white-4": "#8994AE",
        background: "#111318",
        "background-2": "#161B27",
        "background-3": "#15181E",
        border: "#20242D",
        "blue-2": "#60A5FA"
      }
    },
  },
  plugins: [],
};
export default config;
