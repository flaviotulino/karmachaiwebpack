const path = require('path');

module.exports = {
    entry: path.resolve(__dirname + '/app/app.module.js'),
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                loaders: 'babel-loader',
                include: path.resolve(__dirname + './app/app.module.js'),
                options: {
                    babelrc: false,
                    presets: [
                        'es2015'
                    ]
                }
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            { test: /\.html$/, loader: "html-loader" }
        ]
    }
}