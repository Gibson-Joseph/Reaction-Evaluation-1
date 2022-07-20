import React from "react";

interface IName {
  firstName: string;
  lastName: string;
}

export default function Name(props: IName) {
  return (
    <div>
      <h3>Full Name:</h3>
      <em>
        {props.firstName} {props.lastName}
      </em>
      <hr />
    </div>
  );
}
