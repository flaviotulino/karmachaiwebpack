const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname + '/app/application.js'),
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js?/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    babelrc: false,
                    presets: [
                        'env', 'es2015'
                    ]
                }
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'sass'
                ]
            },
            {test: /\.html$/, loader: "html-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname + '/app/index.html'),
        })
    ]
};
