// tailwind.config.js
module.exports = {
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
      },
      height: {
        'screen-dynamic': '100svh',
      },
      minHeight: {
        'screen-dynamic': '100svh',
      },
      screens: {
          'landscape-short': { 'raw': '(orientation: landscape) and (max-height: 500px)' }
      },
    },
  },
  plugins: [],
}
