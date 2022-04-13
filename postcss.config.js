module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: { "--t": "(max-width: 980px)" },
        },
        {
          customMedia: { "--d": "(max-width: 1270px)" },
        },
      ],
    },
  },
};
