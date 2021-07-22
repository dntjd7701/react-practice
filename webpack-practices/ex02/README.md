## webpack-practices: ex01     
---

1. 프로젝트 생성
```bash
 mkdir ex01
 cd ex01
 npm init -y
 npm i -D webpack webpack-cli express
```
2. 프로젝트 구조 
<pre>
    /ex02
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- /public
                |--- index.html
                |--- bundle.js
        |--- /src
                |--- index.js
                |--- App.js
        |--- /webpack.config.js [ webpack config 파일 ]
        |--- dev-server.mjs
</pre>


3. 빌드하기
```bash
 npx webpack 
```
> [ webpack.config.js ]의 output 섹션에 지정한 ./public/bundle.js로 번들링 된다.   


4. test server 실행 
```bash
 node dev-server.ejs
```
> ES6 모듈로 실행(확장자를 .mjs로 변경)해야 한다.

5. [ webpack.config.js ]
```javascript
// common js 방식으로 
// 소스는 ES6 방식 

const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
    }

}
```