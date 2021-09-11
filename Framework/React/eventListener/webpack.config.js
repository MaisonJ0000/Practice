const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: false,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
