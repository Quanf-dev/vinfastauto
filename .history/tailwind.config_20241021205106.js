/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./css/**/*.{scss}",
    "./src/**/*.{js,jsx,ts,tsx}", // Đường dẫn đến các file sử dụng Tailwind
    "./components/**/*.{js,jsx,ts,tsx}", // Đường dẫn đến các component của bạn
    "./node_modules/@shadcn/ui/**/*.js", // Đường dẫn đến các component của ShadCN
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(360deg, #000000 0%, rgba(0, 217, 217, 0) 100%)",
      },
      backdropBlur: {
        32: "32px", // Thêm giá trị cho backdrop-filter
      },
      boxShadow: {
        custom: "-4px 4px 24px 0px #38383826", // Thêm giá trị cho box-shadow
        customButton: "0px 8px 24px 0px #1464F44D", // Thêm giá trị cho box-shadow
      },
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
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
