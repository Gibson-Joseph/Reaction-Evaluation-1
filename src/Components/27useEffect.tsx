import react, { useState, useEffect } from "react";
export default function SimpleUseEffect() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  console.log(`Components Rendered ${count} Time`);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }, []);

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  return (
    <div>
      <h4>count: {count}</h4>
      <button onClick={handleClick}>+</button>
      <h3>calculation: {calculation} Times</h3>
    </div>
  );
}
