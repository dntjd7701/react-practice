// 무조권 있어야돼
import React, { createElement } from "react";
import ReactDOM from "react-dom";
import App from "./App";

// class or function.
// class -> new~
// function 바로 실행
ReactDOM.render(<App />, document.getElementById("root"));

// 여기서 App가 클래스이다. 그럼 new Class하고 render를 부름.
// createElement(App, null);
