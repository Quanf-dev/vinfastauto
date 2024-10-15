/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Đường dẫn đến các file sử dụng Tailwind
    "./components/**/*.{js,jsx,ts,tsx}", // Đường dẫn đến các component của bạn
    "./node_modules/@shadcn/ui/**/*.js", // Đường dẫn đến các component của ShadCN
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1920px",
      },
      fontFamily: {
        font: ["Mulish", "sans-serif"],
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
  plugins: [require("tailwindcss-animate")],
};
