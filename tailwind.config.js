/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'top-purple': '#C10061',
        'bottom-purple': '#270576',
      },
    },
  },
  plugins: [],
}