import React, { Fragment } from "react";
//import moment from "moment";

// 구문은 안된다.

export default function () {
  const date = new Date();

  this.setState(){
    hour:date.getHours();
  }
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <div>
    {("0" + (hour > 12 ? hour - 12 : hour)).slice(-2)} : { ("0" + date.getMinutes()).slice(-2)} : {("0" + date.getSeconds()).slice(-2)} {hour > 12 ? "PM" : "AM"}
    </div>
  );
}

// export default function () {
//   return <div>{moment().format("h:mm:dd")}</div>;
// }
