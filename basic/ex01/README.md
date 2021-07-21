## ex01 : 전통적인 DOM API 기반의 어플리케이션 

1. 프로젝트 생성
    ```bash
    $ mkdir ex01
    $ cd ex01
    $ npm init -y
    $ npm i -D express(서버 개발의 목적이 아닌 단순 실행 목적 )
    ```
2. 프로젝트 디렉터리
<pre>

    /ex01
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- /public
                |--- index.html
                |--- index.js
        |--- dev-server
</pre>

3. scripts
```json



  "scripts": {
    "start": "node dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },



```

4. 어플리케이션 작성   
[index.js]
```javascript
{
  "name": "ex01",
  "version": "1.0.0",
  "description": "",
  "type": "module",  < type을 지정함. 이렇게 되면 require 사용 못함.
  require와, import가 완벽히 호환하지 못하기 때문에 명시해줘야한다.
  (완전한 ES6 시스템, __dir, require 등 사용 불가 )
  webpack에서는 한번 거쳐서 가는거기 때문에 명시를 하지 않아도 알아서 맞춰준다. 
  "main": "dev-server.js",
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
```

5. Test(Test server execution)
```bash
 npm start
```



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
