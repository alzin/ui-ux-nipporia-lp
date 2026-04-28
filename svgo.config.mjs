// SVGO config for landing-page assets.
// Keeps viewBox (needed for responsive sizing with `fill`) and IDs that are
// referenced from CSS/JS, while stripping editor metadata, comments, and
// redundant attributes. Re-runs paths through multipass for max compression.
export default {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIds: { minify: true },
          inlineStyles: { onlyMatchedOnce: false },
        },
      },
    },
    "removeDimensions",
    "sortAttrs",
  ],
};
