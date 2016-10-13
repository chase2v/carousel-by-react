module.exports = {
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.(scss|css)$/, loader: 'style!css!sass' },
			{ test: /\.(png|eot|svg|ttf|woff)$/, loader: 'file' }
		]
	},
	entry: './index.js',
	output: {
		path: __dirname,
		filename: '/dist/bundle.js'
	}
}