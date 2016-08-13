let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        build: './frontend/main.js'
    },

    output: {
        path: './build',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap!sass?sourceMap'
                )
            }
        ]
    },

    devtool: 'source-map',

    watch: true,

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin()
    ]
};