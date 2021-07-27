// common js 방식으로 
// 소스는 ES6 방식 

const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/i, // 대소문자 구분없이 .css로 끝나는 것
            use: ['style-loader', 'css-loader'] // inline과 css파일 로더 
        }, {
            test: /\.s[ac]ss$/i, // sass or scss
            use: ['style-loader',{loader:'css-loader', options: {modules: true}},'sass-loader']
        }, {
            test: /\.svg$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/images',
                name: '[name].[ext]'
            }
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