import React, { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <h2>I've rendered {count} times!</h2>
    </div>
  );
}
