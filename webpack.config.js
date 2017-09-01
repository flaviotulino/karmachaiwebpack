const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function(env) {
    return {
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
                        ],
                        plugins: ['angularjs-annotate']
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
            new webpack.DefinePlugin({
                isDev: env.dev
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname + '/app/index.html'),
            }),
        ]
    }
};
