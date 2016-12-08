var webpack = require('webpack');

module.exports = {
	entry: {
		reactredux: './frontend/App.jsx'
	},
	output: {
		filename: './public/javascripts/bundle.js'
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
