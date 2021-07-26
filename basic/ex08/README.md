## ex08 : JSX Tutorials

### 01. 특징(1) : HTML과의 차이점
### 02. 특징(2) : Single Root Node
### 03. JSX로 함수 컴포넌트 작성하기
### 04. Pure React(React API)로 함수 컴포넌트 작성
### 05. 클래스 컴포넌트 작성하기 
### 06. 특징(3) : JSX 표현식 표기법 {_expression_} 문제점: if-statement
### 07. 특징(4) : 공백(Black space)
### 08. Dynamic HTML Rendering

.
.
.
.
.
.
.
### Run Examples
```bash
$ npm run debug src={no}(ex) 01, 02, 03)
```



**JSX는 HTML이 아닌 javascript라는 것을 알아야한다. createElement !**

> export default function

이름 없이 하나만 나갈 수 있음. 받을 때 이름 지정은 사용자 자유(이름을 정하지 않았기 때문)

```javascript
import React from 'react';
export default function(){
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특성(1) : HTML과의 차이점</p>
        </div>
    );
};  

```

- return은 하나가 되어야함으로 div로 감싸 하나의 root node를 만들어줘야한다. 만약 여기서 div가 없다면 JSX가 createElement로 바뀔 때에 2개 이상의 return 값이 생기므로 오류가 발생하는 것이다. 

```javascript
<h2>App01</h2>
<p>JSX Tutorials - 특성(1) : HTML과의 차이점</p>
```
- 에러 발생 ..

```javascript
export default function(){
    return (
        <div>
            {'....'}
            <h2>App01</h2>
            <p>JSX Tutorials - 특성(1) : HTML과의 차이점</p>
        </div>
    );
};  
```
-여기서 {}없이 주석을 사용한다면 그대로 화면상에 출력되어 나타난다.


#### JSX 내에서의 주석은 화면상에 그대로 출력된다.
ex)
 ```javascript
return (
        <div>
           //....
            <h2>App01</h2>
            <p>JSX Tutorials - 특성(1) : HTML과의 차이점</p>
        </div>
    ); 
```
```javascript
createElement(null, null, '//....');
```
와 같기 때문에 주석의 형태가 아닌 화면상에 출력이 된다. 이를 주석으로 사용하기 위해서는 {}를 사용하여 자바스크립트 코드를 작성해야한다.

 ```javascript
return (
        <div>
		  { /* */ }
            <h2>App01</h2>
            <p>JSX Tutorials - 특성(1) : HTML과의 차이점</p>
        </div>
    ); 

>>
  createElement('div', null, (
		createElement('')
		createElement('h2')
	  	createElement('p')
  
))
```
{}안의 내용은 자바스크립트 코드로 인식되어 표현식, 주석 등이 사용가능하다. 




```javascript
import React from 'react';

// 이름 없이 하나만 나갈 수 있음. 받을 때 이름 지정은 사용자 자유(이름을 정하지 않았기 때문)
export default function(){
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특성(1) : HTML과의 차이점</p>
            { /*
                1. 속성은 Camel Cased
            */ }
            <input type='text' maxLength='10' />
            { /*
                2. Element는 꼭 닫혀있어야 한다. 
                Babel이 JSX에서 자식을 찾을때 닫아놔야 확인이 가능하기 때문이다. 
                신경써서 항상 닫는 습관을 들여야한다.
                오류) <br>, <hr>, <input type='text> ....
            */ }
            <br/>
            <hr/>
            <img width='100px' src='...'/>
            { /*
                3. 속성 이름은 DOM API 기반이다. 
                HTML : <div id='box' class='box'></div>
                DOM API : document.getElementById('box').className='box'
                react : <div id='box' className='box'></div>
                ==
                createElement('div', {id:'box', className:'box'}, 'box'입니다.);
                더해서, style은 객체로 들어가야한다. 
                createElement('div', {id:'box', className:'box', style={}}, 'box'입니다.);
                
            */ }
            <div id='box' className='box'>Box</div>
        </div>
    );
};  
// HTML 이 아니다 !!!


// return은 하나가 되어야함으로 <div></div>로 감싸 하나의 root node를 만들어줘야한다.
// 만약 여기서 <div></div> 가 없다면 JSX가 createElement로 바뀔 때에 2개 이상의 return 값이 생기므로 
// 오류가 발생하는 것이다. 

```