import React, { Fragment } from "react";
//import moment from "moment";

// 구문은 안된다.

export default function () {
  const date = new Date();
  let hour = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  let session = "AM";
  if (hour > 12) {
    hour -= 12;
    session = "PM";
  }
  hour = ("0" + hour).slice(-2);
  return (
    <div>
      {hour} : {minutes} : {seconds} {session}
    </div>
  );
}

// export default function () {
//   return <div>{moment().format("h:mm:dd")}</div>;
// }
