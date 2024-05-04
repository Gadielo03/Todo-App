/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      myblue:'#007d92',
      mygreen:'#62a399',
      mylightpink:'#f1e4f3',
      mydarkpink:'#cd8fa3',
      myfucia:'#f3166b',
      white:'#ffffff',
      transparent:'transparent',
    },
  },
  plugins: [],
}