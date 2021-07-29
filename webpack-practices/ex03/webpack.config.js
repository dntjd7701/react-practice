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
    devServer: {
        contentBase: path.resolve('public'), 
        host: "0.0.0.0",
        port: 7000,
        inline: true, // 메모리상에 번들.js를 올림으로써 build할 필요 없다. 
        liveReload: true, 
        hot: false, // Hot Module Replacement (HMR)은 응용프로그램 실행 중에 추가 또는 제거된 모듈들을 페이지 리로드 없이 교체하는 기능
        compress: true,
        historyApiFallback: true
// HTML5의 History API를 사용하는 경우에 설정해놓은 url 이외의 url 경로로 접근했을때 404 responses를 받게 되는데 
// 이때도 index.html을 서빙할지 결정하는 옵션이다. 
// React와 react-router-dom을 사용해 프로젝트를 만들때도 react-router-dom이 내부적으로 
// HTML5 History API를 사용하므로 미지정 경로로 이동했을때, 있는 경로지만 그 상태에서 refresh를 했을때와 같은 경우에도 
// 애플리케이션이 적절히 서빙될 수 있어서 유용한 옵션
    }

}