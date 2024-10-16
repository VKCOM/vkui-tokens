import path from 'path';
import { fileURLToPath } from 'node:url';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import TerserPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpackConfig from './webpack.config.mjs';

export default function (env, argv) {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));

	const watchMode = argv.liveReload || false;
	const modeEnv = argv.mode || 'development';
	const isProd = modeEnv === 'production';
	const config = webpackConfig(modeEnv);

	const optimization = {
		splitChunks: {
			cacheGroups: {
				vendors: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
		minimize: false,
		minimizer: [],
	};

	if (isProd) {
		optimization.minimize = true;
		optimization.minimizer.push(new TerserPlugin());
	}

	return {
		stats: {
			errorDetails: false,
		},
		context: path.resolve(__dirname, '../'),
		devtool: !isProd && 'source-map',
		entry: {
			main: './src/index.tsx',
		},
		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js',
			publicPath: '/',
		},
		module: {
			rules: [config.modules.ts, config.modules.css, config.modules.svg, config.modules.md],
		},
		plugins: [
			new CleanWebpackPlugin({
				dry: true,
				dangerouslyAllowCleanPatternsOutsideProject: true,
			}),
			new HtmlWebpackPlugin({
				template: './public/index.html',
			}),
			new WebpackNotifierPlugin({ alwaysNotify: false }),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: './public/static',
						to: './static',
					},
				],
			}),
		],
		resolve: config.resolve,
		optimization,
		performance: {
			hints: false,
		},
		devServer: {
			compress: true,
			port: 3000,
			hot: true,
			open: true,
			historyApiFallback: true,
		},
	};
};
