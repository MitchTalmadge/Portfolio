const config = require('./webpack.common.config.js');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

config.mode = "development";

config.module.rules.unshift(
    {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
    }
);

config.devServer = {
    contentBase: config.output.path,
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    port: 9000,
    proxy: {
        '/api': 'http://localhost:8080'
    }
};

config.devtool = 'source-map';

module.exports = config;