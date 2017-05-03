const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				WEBPACK: true
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'src', 'assets'),
				to: path.resolve(__dirname, 'dist', 'assets')
			}
		]),
		new ExtractTextPlugin('bundle.css')
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.resolve(__dirname, 'src')
			},
			{
				test: /\.scss/,
				loader: ExtractTextPlugin.extract('style', 'css!sass!postcss'),
				include: path.resolve(__dirname, 'src')
			},
			{
			    test: /\.jsx?$/,         // Match both .js and .jsx files
			    exclude: /node_modules/,
			    loader: "babel",
			    query:
			      {
			        presets:['react']
			      }
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "file"
			},
			{
				test: /\.(woff|woff2)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url?prefix=font/&limit=5000"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			},
			{
				test: /\.gif/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/gif"
			},
			{
				test: /\.jpg/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/jpg"
			},
			{
				test: /\.png/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/png"
			}
		]
	},
    postcss: function() {
        return [autoprefixer];
    }
};
