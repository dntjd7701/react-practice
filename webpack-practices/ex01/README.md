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
    /ex04
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- /dist
                |--- main.js 
        |--- /public
                |--- index.html
                |--- main.js
        |--- /src
                |--- index.js
                |--- App.js
        |--- dev-server.mjs
</pre>


3. 빌드하기
```bash
 npx webpack ./src/index.js
```
- entry 지정   
- ./dist/main.js로 번들링 된다.

```bash
 npx webpack ./src/index.js -o ./public
```
- entry 지정   
- ./public/main.js로 번들링 된다.

4. test server 실행 

```bash
 node dev-server.ejs
```
- ES6 모듈로 실행(확장자를 .mjs로 변경)해야 한다.