import React, { useEffect, useState } from "react";

export default function SimpleUseEffectComponents() {
  const [data, setData] = useState({});

  console.log("components Reandered");

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
