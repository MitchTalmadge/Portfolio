/*
 * Mitch Talmadge's Web Portfolio
 * Copyright (C) 2019 Mitch Talmadge
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = "../bin";

const config = {
    cache: true,

    entry: {
        polyfills: path.join(__dirname, '../src/polyfills.ts'),
        vendor: path.join(__dirname, '../src/vendors/vendors.ts'),
        main: path.join(__dirname, '../src/main.ts')
    },

    module: {
        rules: [
            {
                test: /\.(component|directive)\.html$/,
                use: ["to-string-loader", "html-loader?-minimize"]
            },
            {
                test: /\.html$/,
                use: "html-loader?-minimize",
                exclude: [/\.(component|directive)\.html$/]
            },
            {
                test: /\.(component|directive)\.css$/,
                use: ["to-string-loader", "css-loader"]
            },
            {
                test: /\.(component|directive)\.scss$/,
                use: ["to-string-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css(\?v=[\d.]+)?$/,
                use: ["style-loader", "css-loader"],
                exclude: [/\.(component|directive)\.css$/]
            },
            {
                test: /\.scss(\?v=[\d.]+)?$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: [/\.(component|directive)\.scss$/]
            },
            {
                test: /\.xml$/,
                use: "xml-loader"
            },
            {
                test: /\.yaml/,
                use: ["json-loader", "yaml-loader"]
            },
            {
                test: /manifest\.json/,
                use: "file-loader?name=./resources/json/[hash].[ext]"
            },
            {
                test: /\.(png|jpg|gif|svg|ico)(\?v=[\d.]+)?$/,
                use: "file-loader?name=./resources/images/[hash].[ext]"
            },
            {
                test: /\.(ttf|eot|woff|woff2)(\?v=[\d.]+)?$/,
                use: 'file-loader?name=./resources/fonts/[hash].[ext]'
            }
        ]
    },

    plugins: [
        // This plugin removes all un-used locales from moment (a nearly 200kb reduction).
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),

        // Aliases for JS libraries.
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            "window.jQuery": 'jquery',
            tether: 'tether',
            Tether: 'tether',
            "window.tether": 'tether',
            "window.Tether": 'tether',
            Popper: 'popper.js'
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html.ejs'),
            filename: path.join(outputPath, 'index.html'),
            favicon: path.join(__dirname, "../src/resources/images/favicon.ico"),
            inject: 'body',
            minify: {
                minifyCSS: true,
                minifyJS: true,
                removeComments: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true
            },
            chunks: ['polyfills', 'vendor', 'main'],
            chunksSortMode: 'manual'
        }),

        new CleanWebpackPlugin(['bin'], {root: path.join(__dirname, '../')}),
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                main: {
                    name: "main",
                    minChunks: Infinity
                },
                vendor: {
                    name: "vendor",
                    minChunks: Infinity
                },
                polyfills: {
                    name: "polyfills",
                    minChunks: Infinity
                },
            }
        }
    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.jsx'],
        modules: ['node_modules'],
        alias: {
            // Force all modules to use the same jquery version.
            'jquery': path.join(__dirname, '../node_modules/jquery/src/jquery')
        }
    },

    output: {
        path: path.join(__dirname, outputPath),
        filename: './resources/js/[name]-[chunkhash].js',
        chunkFilename: './resources/js/[name]-[chunkhash].js',
        sourceMapFilename: './resources/js/[name]-[chunkhash].map'
    },

    node: {
        global: true,
        process: true,
        Buffer: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false,
        clearTimeout: true,
        setTimeout: true
    }
};

module.exports = config;
