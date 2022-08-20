import React, { useMemo, useState } from "react";
export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 8, 2, 3, 4, 5]);
  console.log("render");

  function handleClick() {
    setCount(count + 1);
  }

  function showMax() {
    console.log("changin Max");
    return Math.max(...arr);
  }

  const memo = useMemo(() => showMax(), [arr]);

  function addArray() {
    setArr([...arr, Math.round(count * Math.random())]);
  }

  return (
    <div>
      <p>{count}</p>
      <p>{memo}</p>
      <p>{JSON.stringify(arr)}</p>
      <button onClick={() => handleClick()}>Add</button>
      <button onClick={addArray}>add Array</button>
    </div>
  );
}
