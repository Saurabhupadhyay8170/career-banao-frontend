/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBtn:"#ff8c28",
        hoverBtn:"#e67e22",
        footerBg:"#1f618d",
        primaryNavBackground:"#34495e",
        primaryNavText:"#2c3e50",
        careerOrange: '#F89A00'
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"],
      },
      fontWeight: {
        custom: '500', 
      },
    },
  },
  plugins: [],
}
