import React, { useState } from "react";

type UserName = {
  lastName: string;
};

export const Child2 = (props: any) => {
  const [Name, setName] = useState<UserName>({
    lastName: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setName({ ...Name, [name]: value });
  }

  function handleClick() {
    props.method(Name);
    console.log("Submit", Name);
  }
  console.log("child-2 Data --->", Name);
  return (
    <div>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={Name.lastName}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};
