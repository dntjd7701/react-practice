"use strict";

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
  var no = _ref.no,
      name = _ref.name,
      email = _ref.email;
  // 템플릿 문자열(ES6)
  console.log("".concat(no, " : ").concat(name, " : ").concat(email));
}

; // for ..of(ES6)

for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}

;
