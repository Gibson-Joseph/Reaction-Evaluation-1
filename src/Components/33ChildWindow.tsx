import React, { useEffect, useState } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log("Setting Up...");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return () => {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div>
      <h3>Window Width:{windowWidth}</h3>
    </div>
  );
}
