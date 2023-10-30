/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1D9BF0",
        "neutral-50": "#F9F9F9",
        "neutral-700": "#404040",
        "neutral-1000": "#000000",
        "stroke-50": "rgba(29, 155, 240, 0.24)"
    },
    fontFamily: {
      "inter": ['Inter', 'sans-serif']
    },
    lineHeight: {
      "normal": "normal"
    },
  },
  plugins: [],
  }
}