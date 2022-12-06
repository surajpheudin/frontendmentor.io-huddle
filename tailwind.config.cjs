/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1248px",
    },
    colors: {
      white: "#fff",
      dark: "#000",
      pink: "hsl(332,100%,66%)",
      veryPaleCyan: "hsl(193, 100%, 96%)",
      veryDarkCyan: "hsl(192, 100%, 9%)",
      grayishBlue: "hsl(208,11%,55%)",
    },
    fontSize: {
      sm: ["16px"],
      md: ["18px"],
    },
    fontWeight: {
      normal: 400,
      semiBold: 600,
      bold: 700,
    },
    fontFamily: {
      headings: ["Poppins", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
