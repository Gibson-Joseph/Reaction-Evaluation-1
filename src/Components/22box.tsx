// import { useState } from "react";

// interface IProp {
//   on: boolean;
// }

// export default function Box(props: IProp) {
//   const [on, setOn] = useState(props.on);

//   const styles = {
//     backgroundColor: on ? "#222222" : "#cccccc",
//   };
//   function toggle() {
//     setOn(!on);
//     console.log("Clicked!");
//   }
//   return <div style={styles} className="box" onClick={toggle}></div>;
// }

///////////////////

// import { click } from "@testing-library/user-event/dist/click";
// import { useState } from "react";

interface IProp {
  on: boolean;
  click: any;
  id: number;
}

export default function Box(props: IProp) {
  // const [on, setOn] = useState(props.on);

  const styles = {
    backgroundColor: props.on ? "#222222" : "#cccccc",
  };
  // function toggle() {
  //   setOn(!on);
  //   console.log("Clicked!");
  // }
  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.click(props.id)}
    ></div>
  );
}
