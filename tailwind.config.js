// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBackground: "#1F2937",
        secondaryTwo: "#055A83",
        mainblue: "#0FA5F9",
        secondaryblue: "#376BF0",
        mainorange: "#F9A93B",
        minororange: "#FF9759",
        secondaryorange: "#F4A641",
        babywhite: "#FDFFFC",
        background: "#d9d9d9",
        darkbluelight: "#2A336C",
        darkbluedark: "#232A55",
        textPrimaryColor: "#242A55",
        textSecondaryColor: "#242A55",
        orangeCustom: "#F28724",
        blueCustom: "#147ADD",
      },
      // fontFamily: {
      //   inter: ["Inter", ...defaultTheme.fontFamily.sans],
      //   karla: ["karla", ...defaultTheme.fontFamily.sans],
      //   montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      //   poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      // },
      overflow: ["hover", "focus"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
