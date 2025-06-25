/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#548CA8",
        secondary: "#476072",
        accent: "#334257",
        // Background color of whole web app in App.css
      },
      height: {
        "screen-dynamic": "100dvh",
      },
      minHeight: {
        "screen-dynamic": "100dvh",
      },
    },
  },
  plugins: [],
}
