## ex06 : React(JSX 기반) 어플리케이션으로 리팩토링 : babel(transpile)

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
    $ npm i react react-dom
    $ npm i -D babel-loader
    $ npm i -D @Babel/core @babel/preset-env @babel/preset-react @babel/cli
    $ npx webpack
    ```

- 개발 목적으로 사용할 webpack들과 어플리케이션에 들어갈 react를 설치한다.
  여기서 react는 엔진, react-dom은 virtual dom을 만든다. 
- @Babel은 패키지를 나타낸다.
- Plugin을 모아서 프리셋을 만들어 놨다. 
 여기서 **preset-env**는 ES6 -> ES5로 바꿔준다. (가장 안전성있고 완성되어있는 버전이기 때문)


>  @babel/cli   
   커맨드 라인에서 바벨을 실행할 수 있는 바이너리 파일이 들어있다.

> @babel/preset-react   
   JSX로 작성된 코드들을 createElement 함수를 이용한 코드로 변환해 주는 바벨 플러그인이 내장되어 있다.

> @baberl/preset-env   
  ES6 -> ES5
   
> preset   
   리액트 애플리케이션을 만들 때 필요한 플러그인들의 집합
      바벨은 js 파일을 입력받아 변환하여 결과물 js파일을 출력한다.
      자바스크립트 파일을 변환해 주는 작업은 플러그인(plugin) 단위로 이루어진다.
      하나의 결과물을 위해 여러개의 플러그인을 활용하여 여러번의 변환과정을 거친다.
      이러한 플러그인들의 집합을 preset 이라 칭한다. (ex. 압축관련 플러그인 집합: babel-preset-minify)


  

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

### index.js

>  리액트는 함수, 클래스는 Component가 된다.
```javascript
.
.
ReactDOM.render(App(), document.getElementById('root'));
.
.
```
위의 코드는 아래와 같은 코드로 바뀌게 된다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 리액트는 함수, 클래스는 Component가 된다.
ReactDOM.render(<App/>, document.getElementById('root'));
```


### Component 만들기


### Tips


### 자세한 코드 보기 
