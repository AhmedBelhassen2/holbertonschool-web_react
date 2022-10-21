const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
	hot: true,
	static: path.resolve(__dirname, './dist'),
  },
  performance: {
	hints: false,
  },
  plugins: [
	new HtmlWebpackPlugin({
	  filename: 'index.html',
	  template: './dist/index.html',
      title: 'Holberton Dashboard',
    }),
  ],
  module: {
	rules: [
	  {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		options: {
			presets: ['@babel/env', '@babel/preset-react']
		}
	  },
	  {
		test: /\.css$/i,
		use: ['style-loader', 'css-loader'],
	  },
	  {
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
		loader: 'image-webpack-loader',
  	  },
	],
  },
};