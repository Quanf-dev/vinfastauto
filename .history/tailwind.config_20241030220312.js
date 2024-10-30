/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./css/**/*.{scss}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.js",
  ],
  theme: {
    extend: {
      backdropBlur: {
        32: "32px",
      },
      boxShadow: {
        custom: "-4px 4px 24px 0px #38383826",
        custom: "-4px 4px 24px 0px #38383826",
        customButton: "0px 8px 24px 0px #1464F44D",
      },
      screens: {
        xxl: "1920px",
      },
      fontFamily: {
        font: ["Mulish", "sans-serif"],
      },
      clipPath: {
        parallelogram: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
      },
      colors: {
        colors: {
          primary: "#1464F4",
          secondary: "#689CFB",
          bgLight: "#7DB1FF",
          bgColor: "#FCFCFC",
          textPrimaryColor: "#27272C",
          textSecondColor: "#3C3C3C",
          black: "#26262E",
          other: "#FF924E",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
