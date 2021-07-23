## ex07 : CRA로 만든 Application Remade

### 자세한 코드 보기 
https://github.com/dntjd7701/react-practice/tree/main/basic/ex07


1. 프로젝트 생성
    ```bash
    $ mkdir ex07
    $ cd ex07
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ node node_modules/.bin/webpack --version
    $ npm i react react-dom
    $ npm i -D babel-loader
    $ npm i -D @Babel/core @babel/preset-env @babel/preset-react @babel/cli
    $ npx webpack
    ```


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
    /ex07
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

3. package.json, scripts
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
4. [ webpack.config.js ] 
```javascript

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
```
5. [ babe.config ]
```json
{
    "presets": [
        [
            "@babel/env",
            {
                "targets": {
                    "ie": "11",
                    "edge": "80",
                    "firefox": "73",
                    "opera": "82",
                    "chrome": "69",
                    "safari": "13"
                }
            }
        ],
        "@babel/react"
    ]
}
```

6. 빌드(번들링)

```bash
  $ npm run build
```

7. Test server execution
```bash
  $ npm run start
```

### [ index.js ]

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


8. Component 만들기
```javascript
import React from 'react';

// import를 하지 않으면 실행 시에 오류가 발생한다.
// JSX란 아래와 같은 것을 말한다.
// Compile 혹은 Transpile 과정이 필요하며 이에 사용되는 것이 Babel이다. 

const App = function(){
    const message = "Hello World";
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default App;

```

