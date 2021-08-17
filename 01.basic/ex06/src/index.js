import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App/>, document.getElementById('root'));


// 리액트는 함수, 클래스는 Component가 된다.
// 여기서 <App/>가 하나의 컴포넌트가 된다. 
// 하지만 자바스크립트는 <App/>를 인식하지 못한다. 
// 그렇기에 Babel을 이용해 transpile 과정을 거쳐 자바스크립트가 알 수 있도록 바꿔주어야한다. 