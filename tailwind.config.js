/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#3C3D37",
        secondary: "#40534C",
        accent: "#2C3930",
        extra: "#697565",
        // Background color of whole web app in App.css
      },
      height: {
        'screen-dynamic': '100svh',
      },
      minHeight: {
        'screen-dynamic': '100svh',
      },
    },
  },
  plugins: [],
}
