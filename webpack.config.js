const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ./client/index.js or no ./
  entry: ['./src/client/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'dist.js',
  },
  mode: 'development',
  devServer: {
    host: 'localhost',
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, '/dist'),
      // ./dist or no ./
      publicPath: '/',
    },
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/client/public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
