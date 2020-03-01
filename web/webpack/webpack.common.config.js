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
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = "../dist";

function resourceName(resourcePath, resourceQuery) {
    if(process.env.NODE_ENV === 'development') {
        return '[path][name]-[sha512:hash:base64:4].[ext]';
    }
    return '[hash].[ext]';
}

const config = {
    cache: true,

    entry: {
        polyfills: path.join(__dirname, '../src/polyfills.ts'),
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
                test: /\.(component|directive|vendor)\.css$/,
                use: ["to-string-loader", "css-loader"]
            },
            {
                test: /\.(component|directive|vendor)\.scss$/,
                use: ["to-string-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css(\?v=[\d.]+)?$/,
                use: ["style-loader", "css-loader"],
                exclude: [/\.(component|directive|vendor)\.css$/]
            },
            {
                test: /\.scss(\?v=[\d.]+)?$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: [/\.(component|directive|vendor)\.scss$/]
            },
            {
                test: /\.xml$/,
                use: "xml-loader"
            },
            {
                test: /\.yaml$/,
                use: ["json-loader", "yaml-loader"]
            },
            {
                type: 'javascript/auto',
                test: /\.json$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './resources/json',
                        name: resourceName,
                        esModule: false
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|svg|ico)(\?v=[\d.]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './resources/images',
                        name: resourceName,
                        esModule: false
                    }
                }]
            },
            {
                test: /\.(ttf|eot|woff|woff2)(\?v=[\d.]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './resources/fonts',
                        name: resourceName,
                        esModule: false
                    }
                }]
            },
            {
                test: /\.[a-zA-Z0-9]+$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './resources/static',
                        name: resourceName,
                        esModule: false
                    }
                }],
                exclude: [new RegExp('^((?!\\' + path.sep + 'static\\' + path.sep + ').)+$')]
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
            Popper: 'popper.js',
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
        }),

        new CleanWebpackPlugin({
            dry: true
        }),

        new CopyWebpackPlugin([
            { from: path.join(__dirname, '../src/static/'), to: path.join(__dirname, outputPath) }
        ])
    ],

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    // Split vendor bundle into chunks for each package.
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // Get package name.
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // Remove @ symbols to make package names url-safe.
                        return `npm.${packageName.replace('@', '')}`;
                    },
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
