/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      syne: ["Syne, sans-serif"],
      rubik: ["Rubik, sans-serif"],
      Inter: ["Inter, sans-serif"],
    },
    extend: {
      colors: {
        "Brand-Colors": "#FF9143",
        SC: {
          1: "#1A1A1A",
          2: "#262A2C",
          3: "#696969",
          4: "#FFFFFF",
          5: "#ffffff84",
          6: "#A8A8A8",
          7: "#606060",
          8: "#9CA7B8",
          border: "#FF9142",
        },
        Greyscale: {
          1: "#6C727F",
          2: "#4D5461",
          3: "#E5E6EB",
          4: "#D3D5DA",
          5: "#9EA3AE",
          6: "#6C727F",
          7: "#4D5461",
          8: "#394150",
          9: "#212936",
          10: "#161D21",
          11: "#949494",
        },
      },
    },

    plugins: [],
  },
};
