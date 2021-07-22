## ex05 : React(API 기반) 어플리케이션으로 리팩토링

1. webpack은 작게 분리된 많은 모듈들의 의존성을 분석하여 하나의 js파일로 묶는 도구 
2. 하나의 js 파일을 번들(bundle)이라 하고 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은 단순히 모듈을 하나의 파일로 묶는 작업만을 의미하는 것이 아닌, 어플리케이션 빌드 작업도 병행한다.
4. 빌드 작업 : (webpack)
    + linting(ESLint, 문법 체크) 작업,
    + document 작업(JSDoc) 작업,
    + testing(Mocha, Jest) 작업,
    + 난독화/압축(Uglify) 작업,
    + 번들링(bundling)
5. 자바스크립트 뿐만 아니라 다양한 에셋 (image, css, font)들도 모듈로 취급하는 추상화를 한다. (loader)



1. 프로젝트 생성
    ```bash
    $ mkdir ex05
    $ cd ex05
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ node node_modules/.bin/webpack --version
    $ npx webpack
    ```
2. 프로젝트 디렉터리
<pre>
    /ex05
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- /public
                |--- index.html
                |--- bundle.js [ 빌드 결과물 ]
        |--- /src
                |--- index.js
                |--- App.js
        |--- webpack.config.js
</pre>

3. scripts
```json


  "scripts": {
    "start": "npx webpack serve --progress",
     "build": "npx webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },


```
4. webpack.config.js
```javascript

const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
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
```

5. 빌드(번들링)

```bash
  $ npm run build
```

6. Test server execution
```bash
  $ npm run start
```