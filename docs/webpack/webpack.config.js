const path = require('path');

module.exports = function () {
	const modules = {
		ts: {
			test: /\.ts(x?)$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
		js: {
			test: /\.(js)$/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									useBuiltIns: 'entry',
								},
							],
						],
					},
				},
			],
			exclude: /node_modules/,
		},
		css: {
			test: /\.css$/,
			use: [
				{
					loader: 'style-loader',
				},
				{
					loader: 'css-loader',
				},
			],
		},
	};

	const resolve = {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@/*': path.resolve(__dirname, 'src/*'),
		},
	};

	return {
		modules,
		resolve,
	};
};
