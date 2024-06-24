import type { Config } from "tailwindcss";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "haiti-blue": "#1C66F9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: "var(--font-inter)",
        display: "var(--font-lexend)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
