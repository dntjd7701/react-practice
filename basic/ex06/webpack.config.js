// common js 방식으로 
// 소스는 ES6 방식 

const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test: /\.js$/i,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.resolve('public'), 
        host: "0.0.0.0",
        port: 7000,
        inline: true, 
        liveReload: true, 
        hot: false, 
        compress: true,
        historyApiFallback: true
    }

}