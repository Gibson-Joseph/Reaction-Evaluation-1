import React, { useState } from "react";
export default function HeaderMessage() {
  const [message, setMessage]: any = useState([1, 2, 3, 4]);
  return (
    <div>
      {/* {message.length > 0 && <h1>You have {message.length} unread message!</h1>} */}

      {message.length > 0 ? (
        <h1>
          You have {message.length} unread{" "}
          {message.length === 1 ? "message" : "messages"}
        </h1>
      ) : (
        <h1>You are all caught up</h1>
      )}
    </div>
  );
}
