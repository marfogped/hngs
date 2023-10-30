/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "480px" },
        sm: { min: "481px" },
        md: { min: "768px" },
        lg: { min: "992px" },
        xl: { min: "1200px" },
        xxl: { min: "1920px" },
      },
    },
  },
  plugins: [],
};
