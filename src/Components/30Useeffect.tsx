import React, { useEffect, useState } from "react";

function Sample() {
  console.log("Re-Rendered");
  useEffect(() => {
    console.log("Created");
    return () => {
      console.log("I am destroying");
    }; //<-- ComponentWillUnMount
  }, []);
  return <p>sample</p>;
}

export default function Components() {
  const [show, changeShow] = useState(true);

  function handleClick() {
    changeShow(!show);
  }
  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {show && <Sample />}
    </div>
  );
}
