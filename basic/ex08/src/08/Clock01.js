import React, { Fragment } from "react";
import moment from "moment";

// 구문은 안된다.
export default function () {
  const date = new Date();
  let hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let session = hour > 12 ? "PM" : "AM";

  const html =
    "<span>" +
    ("0" + (hour > 12 ? hour - 12 : hour)).slice(-2) +
    " : " +
    ("0" + date.getMinutes()).slice(-2) +
    " : " +
    ("0" + date.getSeconds()).slice(-2) +
    "</span>";

  return (
    // HTML 태그를 동적으로 생성하여 JSX에 추가하는 방식은 기본적으로 금지되어있음 (XSS방지)

    <div>{html}</div>
  );
}

// export default function () {
//   let time = moment().format("H:mm:ss");
//   return <div>{time}</div>;
// }
