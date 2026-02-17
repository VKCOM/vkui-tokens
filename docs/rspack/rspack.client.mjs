import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { rspack } from '@rspack/core';
import rspackConfig from './rspack.config.mjs';

export default function (_env, argv) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  const watchMode = argv.liveReload || false;
  const modeEnv = argv.mode || 'development';
  const isProd = modeEnv === 'production';
  const config = rspackConfig(modeEnv);

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
      filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[contenthash].js',
      publicPath: '/',
    },
    experiments: {
      css: true,
    },
    module: config.module,
    plugins: [
      new rspack.CopyRspackPlugin({
        patterns: [
          {
            from: './public/static',
            to: './static',
          },
        ],
      }),
      new rspack.HtmlRspackPlugin({
        template: './public/index.html',
        publicPath: '/vkui-tokens/',
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
      proxy: [
        {
          context: ['/vkui-tokens/assets'],
          target: 'http://localhost:3000',
          pathRewrite: { '^/vkui-tokens/(.*)': '/$1' },
        },
      ],
    },
  };
}
