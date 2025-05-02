/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: "#0961F5",
        dark: "#202244",
        "light-gray":"#D5E2F5",
        "gray-1":"#545454",
        "gray-2":"#505050",
        secondary: "#F5F9FF",
        success:"#167F71",
        "light-gray-2": "#E8F1FF",
        "gray-3": "hsla(206, 12%, 74%, 0.2)",
        "gray-4":"hsla(206, 12%, 74%, 0.4)",
        "gray-5":"hsla(0, 0%, 33%, 0.8)",
        "gray-6":"#A0A4AB",
        "orange-1":"#FF6B00"
        
      }
    },
  },
  plugins: [],
}