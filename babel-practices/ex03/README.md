> @babel/core, @babel/cli, plugins 를 이용하여 transpile 해보기 

[코드보기](https://github.com/dntjd7701/react-practice/tree/main/babel-practices)

## babel-plugin

1. 설치 
```bash
$ npm i -D @babel/core @babel/cli
```

2. 소스 파일 작성(ES6)
```javascript
// ES6으로 만들어진 플러그인 
//  플럭그인을 적용하여 ES6의 '=>' 등을 변환해보는 과정 

// 블록 스코프 변수(ES6)
const users = [{
    no: 0,
    name: 'mike',
    email: "mike@gmail.com"
}, {
    no: 1,
    name: 'dooly',
    email: "dooly@gmail.com"
}
];

// 객체분해(ES6)
function print({no, name, email}){
    // 템플릿 문자열(ES6)
    console.log(`${no} : ${name} : ${email}`);
};

// for ..of(ES6)
for(let user of users){
    print(user);
};
```
---

## 적용해보기 

1. 블록 스코프 변수 변환(**@babel/plugin-transform-block-scoping)**

```bash
$ npm i -D @babel/plugin-transform-block-scoping
$ npx babel src/ex01.js -o dist/ex01.01.js --plugins @babel/plugin-transform-block-scoping
```
```javascript
var users = [{
  no: 0,
  name: 'mike',
  email: "mike@gmail.com"
}, {
  no: 1,
  name: 'dooly',
  email: "dooly@gmail.com"
}]; 

```
2. 객체 분해 파라미터 변환(**@babel/plugin-transform-parameters**)
```bash
$ npm i -D @babel/plugin-transform-parameters
$ npx babel src/ex01.js -o dist/ex01.02.js --plugins @babel/plugin-transform-parameters
```
```javascript
function print(_ref) {
  let {
    no,
    name,
    email
  } = _ref;
}
```

3. 템플릿 문자열 변환(**@babel/plugin-transform-template-literals**)
```bash
$ npm i -D @babel/plugin-transform-template-literals
$ npx babel src/ex01.js -o dist/ex01.03.js --plugins @babel/plugin-transform-template-literals
```
```javascript
  // 템플릿 문자열(ES6)
.
.
  console.log("".concat(no, " : ").concat(name, " : ").concat(email));
```

4. for ..of 변환 (**@babel/plugin-transform-for-of**)
```bash
$ npm i -D @babel/plugin-transform-for-of
$ npx babel src/ex01.js -o dist/ex01.04.js --plugins @babel/plugin-transform-for-of
```
```javascript
// for ..of(ES6)

for (var _i = 0, _users = users; _i < _users.length; _i++) {
  let user = _users[_i];
  print(user);
}
```
5. 모든 변환 적용하기 
```bash
$ npm i -D @babel/plugin-transform-for-of @babel/plugin-transform-template-literals @babel/plugin-transform-parameters @babel/plugin-transform-block-scoping


$ npx babel src/ex01.js -o dist/ex01.all.js --plugins @babel/plugin-transform-for-of --plugins @babel/plugin-transform-template-literals --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-block-scoping
```
```javascript
// ES6으로 만들어진 플러그인 
//  플럭그인을 적용하여 ES6의 '=>' 등을 변환해보는 과정 
// 블록 스코프 변수(ES6)
var users = [{
  no: 0,
  name: 'mike',
  email: "mike@gmail.com"
}, {
  no: 1,
  name: 'dooly',
  email: "dooly@gmail.com"
}]; // 객체분해 파라미터(ES6)

function print(_ref) {
  var {
    no,
    name,
    email
  } = _ref;
  // 템플릿 문자열(ES6)
  console.log("".concat(no, " : ").concat(name, " : ").concat(email));
}

; // for ..of(ES6)

for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}

;

```

---
### 결과

이러한 플러그인이 여러가지가 모일 경우 설치 및 transpiling 과정에서 여러 불편과 에러가 발생한다.
그러므로 이러한 것들을 통합적으로 관리하고 실행할 수 있게하는
**preset**이 필요하다.