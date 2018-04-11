const config = {
  entry: ['./index.jsx'],
  output: {
    path: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
