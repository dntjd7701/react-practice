// 무조권 있어야돼 
import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// class or function. 
// class -> new~
// function 바로 실행 
ReactDOM.render(
    React.createElement(App, null)
    , document.getElementById('root'));
