import path from 'path';
import RemarkHTML from 'remark-html';
import { fileURLToPath } from 'node:url';

export default function () {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
		md: {
			test: /\.md$/,
			use: [
			  {
				loader: 'html-loader',
			  },
			  {
				loader: 'remark-loader',
				options: {
				  remarkOptions: {
					plugins: [RemarkHTML],
				  },
				},
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
