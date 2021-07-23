> @babel/core, @babel/cli 를 이용하여 transpile 해보기 

## CLI 사용법
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


3. 변환하기
```bash
$ npx babel src -d dist
Successfully compiled 1 file with Babel (77ms).
```
- -d  : 결과를 지정한 디렉터리로 변환하여 저장한다.
- 플러그인을 지정하지 않으면 결과는 바뀌지 않는다. 