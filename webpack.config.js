const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
            { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader' }
        ]
    },
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}