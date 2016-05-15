const webpack = require('webpack');
const path = require('path');
const entries = ['app', 'vendor', 'polyfills'];

module.exports = {
    context: path.resolve('app'),
    entry: {
        polyfills: './polyfills',
        vendor: './vendor',
        app: './app'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
    },
    resolveLoader: {
        root: path.resolve('node_modules')
    },
    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: 'tslint'
        }],
        loaders: [{
            test: /\.scss$/,
            loaders: [
                'style',
                'css?sourceMap',
                'sass?sourceMap'
            ]
        }, { 
            test: /\.ts$/, 
            loader: 'ts'
        }]
    },
    devServer: {
        contentBase: 'app',
        hot: true,
        inline: true,
        compress: true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
           name: entries
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map'
};
