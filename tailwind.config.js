/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F5DC', // You can adjust the color code as per your preference
      },
    },
  },
  plugins: [],
}

