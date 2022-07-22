import React, { useState } from "react";

interface IName {
  firstName: string;
  lastName: string;
}

export default function Name(props: IName) {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown(!isShown);
  }

  // return (
  //   <div>
  //     <h3>Full Name:</h3>
  //     <strong>{isShown && `${props.firstName} ${props.lastName}`}</strong>
  //     <br />
  //     <button onClick={toggleShown}>Show Name</button>
  //     <button onClick={toggleShown}>Hide Name</button>
  //     <hr />
  //   </div>
  // );

  //
  return (
    <div>
      <h3>Ful Name:</h3>
      <p>
        <strong>{isShown && `${props.firstName} ${props.lastName}`}</strong>
      </p>
      <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Name</button>
    </div>
  );
}
