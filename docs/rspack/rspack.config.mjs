import path from 'path';
import RemarkHTML from 'remark-html';
import { fileURLToPath } from 'node:url';

export default function () {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));

	return {
		module: {
			rules: [
				{
					test: /\.ts(x?)$/,
					use: {
						loader: 'builtin:swc-loader',
						options: {
							jsc: {
								parser: {
									syntax: 'typescript',
									tsx: true,
								},
							},
						},
					},
				},
				{
					test: /\.css$/,
					type: 'css',
				},
				{
					test: /\.svg$/,
					oneOf: [
						{
							resourceQuery: /url/,
							type: 'asset',
						},
						{
							resourceQuery: /inline/,
							use: {
								loader: '@svgr/webpack',
							},
						},
						{
							use: {
								loader: '@svgr/webpack',
							},
						},
					],
				},
				{
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
			],
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.json'],
			alias: {
				'@/public': path.resolve(__dirname, '../public'),
				'@': path.resolve(__dirname, '../src'),
			},
		},
	};
}
