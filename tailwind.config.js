/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "0.9rem",
      xl: "1.2rem",
      "2xl": "1.3rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backdrop: "#f4f2ee",
        border_box: "#bbbbbb",
        boxColor: "#ffffff",
        buttonColor: "#0a66c2",
        purple: "#8344cc",
        title: "#3f3f3f",
        des_text: "#595959",
        small_text: "#9a95a7",
        click_title: "#535353",
      },
    },
  },
  plugins: [],
});
