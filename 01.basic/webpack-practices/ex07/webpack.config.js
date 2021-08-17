// common js 방식으로 
// 소스는 ES6 방식 

const path = require('path');

module.exports = {
    mode: "none",
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.txt$/i,
            loader: path.resolve('src/text-loader.js')
        }]
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve('public'),
        watchContentBase: true,
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}