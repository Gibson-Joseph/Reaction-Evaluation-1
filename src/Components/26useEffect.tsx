import React, { useState, useEffect } from "react";

export default function UseEffectComponents() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  console.log("Component rendered");

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(
    function () {
      console.log("Effect Function Ran");
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  );

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
