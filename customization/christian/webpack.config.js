module.exports = {
  entry: {
    'login-login': './src/login/index.js',
    // 'reportbase-framesetreport': './src/reportbase/index.js',
    'timebase-frameset': './src/timebase/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
