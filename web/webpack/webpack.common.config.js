const path = require('path');
const webpack = require('webpack');

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
                test: /\.css(\?v=[\d\.]+)?$/,
                use: ["style-loader", "css-loader"],
                exclude: [/\.(component|directive)\.css$/]
            },
            {
                test: /\.scss(\?v=[\d\.]+)?$/,
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

        // Puts chunks in correct order.
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),

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
        })
    ],

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
    },

    devServer: {
        contentBase: path.join(__dirname, outputPath),
        disableHostCheck: true,
        historyApiFallback: true,
        compress: true,
        port: 9000
    }
};

module.exports = config;
