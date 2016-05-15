const webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        polyfills: './polyfills',
        vendor: './vendor',
        app: './main'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
    },
    module: {
        preLoaders: [
            { test: /\.ts$/, loader: "tslint" }
        ],
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    devServer: {
        contentBase: 'app',
        hot: true,
        inline: true,
        compress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
