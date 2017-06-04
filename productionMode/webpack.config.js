// webpack.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'app-client.js'),
    output: {
        path: path.resolve(__dirname, 'src', 'static'),
        publicPath: "/js/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    devServer: {
        contentBase: './src/static'
    }

};
