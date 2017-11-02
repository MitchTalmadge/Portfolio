const config = require('./webpack.common.config.js');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

config.module.rules.unshift(
    {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
    }
);

config.plugins.push(
    // HTML Webpack Plugin with dev set to true.
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../index.html.ejs'),
        favicon: path.join(__dirname, '../resources/images/favicon.ico'),
        filename: path.join(config.output.path, 'index.html'),
        inject: 'body',
        minify: {
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true
        },
        chunksSortMode: 'dependency',
        dev: true
    })
);

config.devtool = 'source-map';

module.exports = config;