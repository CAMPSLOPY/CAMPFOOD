module.exports = {
  purge: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
      minHeight: {
        "3/4": "80vh",
      },
    },
  },
  variants: {},
  plugins: [],
};
