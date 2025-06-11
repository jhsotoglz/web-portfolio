/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#002642",
        surface: "#840032",
        primary: "#E59500",
        secondary: "#adb5bd",
        accent: "#ced4da",
        text: "#E5DADA",
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
