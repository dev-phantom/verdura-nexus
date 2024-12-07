/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#011105",
        forestGreen: "#334239",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}
