// common js 방식으로 
// 소스는 ES6 방식 

const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/i, // 대소문자 구분없이 .css로 끝나는 것
            use: ['style-loader', {loader:'css-loader', options: {modules: true}}] // inline과 css파일 로더 
        }]
    },
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