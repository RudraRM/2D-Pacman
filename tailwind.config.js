/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arcade: {
          black: "#000000",
          blue: "#2121ff",
          white: "#ffffff",
          yellow: "#ffff00",
          red: "#ff0000",
          pink: "#ff184f",
          cyan: "#00ffff",
          orange: "#ffa500",
        },
      },
      fontFamily: {
        arcade: [
          "Courier New",
          "Courier",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 20px rgba(33, 33, 255, 0.8)",
        "glow-intense": "0 0 40px rgba(255, 255, 0, 1), 0 0 60px rgba(33, 33, 255, 0.6)",
        "glow-red": "0 0 30px rgba(255, 0, 0, 0.8)",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
}
