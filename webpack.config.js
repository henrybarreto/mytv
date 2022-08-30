module.exports = {
  //other conf omited
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /^webworkify$/,
      "webworkify-webpack"
    ),
  ],
};
