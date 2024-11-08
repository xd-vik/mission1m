/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight:{
        extraheavy:550,
      },
      fontFamily:{
        alexandria:['Alexandria', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
