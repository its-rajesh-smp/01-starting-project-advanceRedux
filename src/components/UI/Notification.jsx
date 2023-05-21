import React from "react";

function Notification(props) {
  return (
    <div className=" Notification-div ">
      <h1>{props.message}</h1>
    </div>
  );
}

export default Notification;
