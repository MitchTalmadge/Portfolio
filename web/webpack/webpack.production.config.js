const config = require('./webpack.common.config.js');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const path = require('path');

config.mode = "production";

// Using AOT TypeScript compiler.
config.module.rules.unshift(
    {
        test: /\.ts$/,
        use: '@ngtools/webpack',
        exclude: [/\.(spec|e2e)\.ts$/]
    }
);

config.plugins.push(
    // AOT Angular Plugin
    new AngularCompilerPlugin({
        tsConfigPath: path.join(__dirname, '../tsconfig.json'),
        entryModule: path.join(__dirname, '../src/app.module#AppModule')
    })
);

module.exports = config;