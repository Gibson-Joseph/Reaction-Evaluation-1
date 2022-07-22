// import { number } from "prop-types";
// import React from "react";
// function NavigationBar(){
//   return(
//     <div>
//       <ul>
//         <li>About</li>
//         <li>Menu</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   )
// }
// export default NavigationBar

// const page=(
//   <div>
//     <h1>Challenge</h1>
//     <p>This is my new challenge</p>
//   </div>
// )
//  function Challenge(){
//   return(
//     page
//   )
//  }
//  export default Challenge
////////////////

// export default function Arr() {
//   const arr: number[] = [1, 2, 3, 4, 5, 20];
//   return (
//     <div>
//       <ul>
//         {arr.map((item) => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function Index() {
//   const arr:string[] = ["gibson", "joseph", "kathish", "kumar"];

//   return (
//     <div>
//       <ul>
//         {arr.map((item:string) => (
//           <li>{item[0].toUpperCase() + item.slice(1)}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

/////////////////////
import React from "react";
import Name from "./07name";
import nameData from "../Components/06namedata";

export default function NameValue() {
  // console.log(nameData);
  const nameValue = nameData.map((item, index) => (
    <Name key={index} firstName={item.firstName} lastName={item.lastName} />
  ));
  return <div>{nameValue}</div>;
}
