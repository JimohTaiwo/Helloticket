/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        black:{
          brand:"#10144D",
        },
        grey:{
          DEFAULT:"#3D46C7",
          stroke: "#E2E8F0"
        },
        blue_outline:{
          DEFAULT:"#3D46C7"
        }
      },
      fontFamily: {
        manrope: "Manrope, sans-serif",
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
}

