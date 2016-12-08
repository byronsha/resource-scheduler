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
	}
};
