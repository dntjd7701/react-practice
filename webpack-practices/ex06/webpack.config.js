// common js 방식으로 
// 소스는 ES6 방식 

const path = require('path');

module.exports = {
    mode: "none",
    entry: path.resolve('src/index.js'),
    output:{
        // 번들링 위치와 번들 파일명 지정
        path: path.resolve('public'),
        filename: 'bundle.js', 
        // asset의 위치 지정 (빌드시 src의 파일이 옮겨지는 위치)
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.(png|gif|jpe?g|ico|tiff?|bmp|svg)$/i,
            type: 'asset/resource' // webpack이 정한 타입
        },{
            test: /\.(sa|sc|c)ss$/i, // 대소문자 구분없이 .css로 끝나는 것
            use: ['style-loader','css-loader', 'sass-loader'] // inline과 css파일 로더 
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