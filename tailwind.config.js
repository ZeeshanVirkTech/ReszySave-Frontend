/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backGroundColor: "#D8DFEA",
        primary: "#013a8c",
        primary2: "#01337C",
        secondary: "#6791D0",
        danger: "#f05348",
        newColor: "#00C17B",
        newBgColor: "#CCFFED",
        warningBg: "#FFEBCC",
        warning: "#FF9900",
        inProgressColor: "#8174DD",
        inProgressbgColor: "#E4E0FF",
        lightGrayBg: "#EDF1F7",
      },
      screens: {
        sm: { min: "320px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1300px" },
        xl: { min: "1301px", max: "1536px" },
        "2xl": { min: "1536px" },
      },
    },
  },
  plugins: [],
};
