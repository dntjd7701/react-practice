import React, { Fragment } from "react";


// 구문은 안된다.
export default function () {
  const date = new Date();
  let hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
 
  return (
    // comment01: 컴포넌트 안이 아니기 때문에 자바스크립트 구문이 가능하다.

    <div /* comment02 여기서도 다중행이 가능하다 (사용 ㄴㄴ) */
    className='clock' title='시계' props01='hello' props02='world'>
        {/* JSX는 HTML이 아니다 !!!!!!! <!-- --> 와 같은 주석은 사용할 수 없다.  */}

        //comment03: JSX 컴포넌트 안에서(랜더링) 주석을 사용하면 화면에 그대로 나온다.

        {("0" + (hour > 12 ? hour - 12 : hour)).slice(-2)}
        {/* comment04: 이런 방식으로 표현식이 실행되는 블록안에서 주석을 달아야한다.  */}
        {" : "}
        {("0" + minutes).slice(-2)}
        {" : "}
        {("0" + seconds).slice(-2)}
        { hour > 12 ? "PM" : "AM"}

    </div>
  );
}

