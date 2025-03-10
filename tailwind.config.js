/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/index.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geo: "Georama_400Regular",
      },
    },
  },
  plugins: [],
};
