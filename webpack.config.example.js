var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./frontend/entry.js'
	],
	output:{
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'public'),
			publicPath: "http://localhost:9090/public/"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env':{
				'AUTH0_CLIENT_ID': JSON.stringify('Your Auth0 Client ID'),
				'AUTH0_DOMAIN': JSON.stringify('Your Auth0 Domain')
			}
		})
	]
};
