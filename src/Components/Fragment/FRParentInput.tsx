import React, { RefObject } from "react";
import FRInputs from "./FRInput";

export default function FRParentInputs() {
  const inputRef = React.createRef<HTMLInputElement>();
  function handleClick() {
    inputRef.current?.focus();
  }
  return (
    <div>
      <FRInputs ref={inputRef} />
      <button onClick={() => handleClick()}>Focus Input</button>
    </div>
  );
}
