module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {

          primary: "#251D58",

          secondary: "#f48c42",

          accent: "#0c8e76",

          neutral: "#281F33",

          "base-100": "#E5E5E5",

          info: "#7CB0D5",

          success: "#3DD194",

          warning: "#BC900B",

          error: "#DF3A60",
        },
      },
      {
        dark: {


          primary: "#251D58",

          secondary: "#828DF8",

          accent: "#F471B5",

          neutral: "#1D283A",

          "base-100": "#0F1729",

          info: "#0CA6E9",

          success: "#2BD4BD",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },


    ],
  },
  plugins: [require("daisyui"),


  ],
}
