import React, { useState } from "react";
import WindowTracker from "./33ChildWindow";

export default function Window() {
  const [show, setShow] = useState(true);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={handleClick}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
