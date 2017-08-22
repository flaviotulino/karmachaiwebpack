module.exports = {
    entry: './index.js',
    output: {
        path: './',
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: require.resolve('chai-as-promised')
            }
        ],
        loaders: [
            {
                test: /\.jsx?/,
                loaders: [
                    'babel'
                ],
                include: './index.js',
                query: {
                    presets: [
                        'es2015'
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
            }
        ]
    }
}