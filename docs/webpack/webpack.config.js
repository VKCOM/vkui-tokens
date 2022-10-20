const path = require('path');

module.exports = function () {
	const modules = {
		ts: {
			test: /\.ts(x?)$/,
			use: [
				{
					loader: 'babel-loader',
				},
				{
					loader: 'ts-loader',
				},
			],
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
		svg: {
			test: /\.svg/,
			use: [
				{
					loader: '@svgr/webpack',
				},
			],
		},
	};

	const resolve = {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@/public': path.resolve(__dirname, '../public'),
			'@': path.resolve(__dirname, '../src'),
		},
	};

	return {
		modules,
		resolve,
	};
};
