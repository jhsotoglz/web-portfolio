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
        secondary: "#697565",
        accent: "#40534C",
        extra: "#40534C",
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
