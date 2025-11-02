/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "media"], // hỗ trợ cả class và system
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#0d0d0d"
        },
        foreground: {
          light: "#111111",
          dark: "#e6e6e6"
        }
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          lg: "1100px"
        }
      }
    }
  },
  plugins: []
};
