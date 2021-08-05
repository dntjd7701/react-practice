## ex04 : 어플리케이션 번들링 : webpack

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
    $ mkdir ex04
    $ cd ex04
    $ npm init -y
    $ npm i -D webpack webpack-cli express(개발용)
    $ node node_modules/.bin/webpack --version
    $ npx webpack
    ```
2. 프로젝트 디렉터리
<pre>

    /ex04
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- /public
                |--- index.html
                |--- bundle.js
        |--- /src
                |--- index.js
                |--- EmaillistApp.js
        |--- dev-server
</pre>

3. scripts
```json


{
  "name": "ex04",
  "version": "1.0.0",
  "description": "",
//type module 삭제 
  "main": "dev-server.mjs", // 개발 서버 생성
  "scripts": {
    "start": "node dev-server.mjs",
     "build": "npx webpack ./src/index.js -o ./public",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.17.1"
  }
}


```

4. 어플리케이션 작성   
[public/index.html]
```html
<script src='bundle.js/'></script>
```



[src/index.js]
```javascript
import { App } from './App';
// rendering
document.getElementById('root').appendChild(App());
```

[src/EmaillistApp.js]
```javascript
const App = function(){
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;
}

export { App };
```

5. 빌드(번들링)
```bash
  $ npx webpack ./src/index.js -o ./public/bundle.js
```

```bash
  $ npm run build
```

6. Test server execution
```bash
  $ npm start
```