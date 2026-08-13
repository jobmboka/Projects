/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          DEFAULT: '#16a34a', // Emerald Green
          dark: '#14532d',    // Dark Forest Green
          light: '#86efac',   // Mint Accent Green
        },
      },
    },
  },
  plugins: [],
}