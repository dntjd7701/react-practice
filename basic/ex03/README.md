## ex03 : 어플리케이션 분리(2) : ES6 Module System, 어플리케이션 분리(1)

1. 프로젝트 생성
    ```bash
    $ mkdir ex03
    $ cd ex03
    $ npm init -y
    $ npm i -D express(서버 개발의 목적이 아닌 단순 실행 목적 )
    ```
2. 프로젝트 디렉터리
<pre>

    /ex03
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- /public
                |--- index.html
                |--- index.js
                |--- App.js
        |--- dev-server
</pre>

3. scripts
```json


{
  "name": "ex03",
  "version": "1.0.0",
  "description": "",
  "type": "module",  /*  < type을 지정함. 이렇게 되면 require 사용 못함.
  require와, import가 완벽히 호환하지 못하기 때문에 명시해줘야한다.
  (완전한 ES6 시스템, __dir, require 등 사용 불가 )
  webpack에서는 한번 거쳐서 가는거기 때문에 명시를 하지 않아도 알아서 맞춰준다. */
  "main": "dev-server.js", // 개발 서버 생성
  "scripts": {
    "start": "node dev-server",
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
[index.js]
```javascript
import { App } from './App.js';
// rendering
document.getElementById('root').appendChild(App());

```

[App.js]
```javascript
const App = function(){
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;

    export { App }
}
```

[index.html]
```html
<script type="module" src='index.js'></script>
<script type="module" src='App.js'></script>
```

5. Test(Test server execution)
```bash
 npm start
```


6. 결론
  - 프론트엔드 어플리케이션이 수십에서 수백 개의 모듈로 분리된 경우, 브라우저에서 개별적으로 이 모듈들을 import하는 것은 상당히 비효율적이다.
  = 프론트엔드 어플리케이션은 자바스크립트 외에 다양한 asset(css,img,font...)에 대한 로딩 동기화도 고려되어야 한다. 


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

import - export   

a.js   
export default function(){

}   
으로 되어있으면, 하나만. 
b.js   
export const a = 10   
export const b = function(){}   
{ a:a, b:b } << 요렇게 오는거 

import f from 'a'    
import { a } from 'b' < 정확한 이름을 지정해야 하는 경우 
