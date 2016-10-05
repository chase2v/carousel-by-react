module.exports = {
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.png$/, loader: 'file' }
		]
	},
	entry: './index.js',
	output: {
		path: __dirname,
		filename: '/dist/bundle.js'
	}
}