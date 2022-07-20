// import { useState } from "react";
// import boxes from "./20boxes";
// import "../Assets/Styles/10boxes.css";
// import Box from "../Components/22box";

// export default function ParentBox() {
//   const [squares, setSquares]: any = useState(boxes);
//   // const styles = {
//   //   backgroundColor: squares.id % 2 === 0 ? "#222222" : "#cccccc",
//   // };

//   const squareElement = boxes.map((square) => (
//     <Box key={square.id} on={square.on} />
//   ));
//   return <div>{squareElement}</div>;
// }

/////////////////

import { useState } from "react";
import boxes from "./20boxes";
import "../Assets/Styles/10boxes.css";
import Box from "../Components/22box";

export default function ParentBox() {
  const [squares, setSquares]: any = useState(boxes);

  function handleClick(id: number): any {
    setSquares((preSquares: any) => {
      const newSquares = [];

      for (let i: number = 0; i < preSquares.length; i++) {
        const currentSquare = preSquares[i];
        if (currentSquare.id === id) {
          const updateSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updateSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }

  const squareElement = squares.map((square: any) => (
    <Box key={square.id} id={square.id} click={handleClick} on={square.on} />
  ));
  return <div>{squareElement}</div>;
}
