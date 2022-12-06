/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    colors: {
      white: "#fff",
      dark: "#000",
      pink: "hsl(332,100%,66%)",
      veryPaleCyan: "hsl(193, 100%, 96%)",
      veryDarkCyan: "hsl(192, 100%, 9%)",
      grayishBlue: "hsl(208,11%,55%)",
      gray: {
        50: "#f2f2f2",
        100: "#d9d9d9",
        200: "#bfbfbf",
        300: "#a6a6a6",
        400: "#8c8c8c",
        500: "#737373",
        600: "#595959",
        700: "#404040",
        800: "#262626",
        900: "#0d0d0d",
      },
    },
    fontSize: {
      xs: ["14px"],
      sm: ["16px"],
      md: ["18px"],
      xl: ["20px"],
      "2xl": ["24px"],
      "3xl": ["28px"],
      "4xl": ["32px"],
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
    boxShadow: {
      md: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      lg: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    extend: {
      gridTemplateColumns: {
        footer:
          "minmax(350px, 1fr) minmax(150px, 200px) minmax(150px, 200px) minmax(200px, 1fr)",
      },
    },
  },
  plugins: [],
};
