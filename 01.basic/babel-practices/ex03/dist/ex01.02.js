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
}]; // 객체분해(ES6)

function print(_ref) {
  let {
    no,
    name,
    email
  } = _ref;
  // 템플릿 문자열(ES6)
  console.log(`${no} : ${name} : ${email}`);
}

; // for ..of(ES6)

for (let user of users) {
  print(user);
}

;
