import React, { Fragment, Component } from "react";
import Header from "./Header";
import Content from "./Content";

// class 이름을 주지 않아도 상관없다. (default 익명 클래스)
export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header name="App05" />
        <Content />
      </Fragment>
    );
  }
}
