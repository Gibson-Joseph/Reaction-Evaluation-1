import { Mode } from "@mui/icons-material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import React, { useState } from "react";
import { postUser } from "../../Api/api";

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
}

export default function AddUser(props: any) {
  const [addList, setAddList] = useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
  });

  const [isPending, setIsPending] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setAddList({ ...addList, [name]: value });
  }

  // console.log(addList);

  function handleClick() {
    fetch("http://localhost:3006/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(addList),
    }).then(() => {
      console.log("new list addes");
      props.userData();
    });
  }

  // function handleClick() {
  //   props.userData(addList);
  // }

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        name="firstname"
        placeholder="First Name"
        value={addList?.firstname}
      />
      <input
        onChange={handleChange}
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={addList?.lastname}
      />
      <input
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Email"
        value={addList?.email}
      />
      <input
        onChange={handleChange}
        type="text"
        name="mobile"
        placeholder="Mobile"
        value={addList?.mobile}
      />
      {/* {!isPending && (
        <button className="add-icon" onClick={() => handleClick()}>
          <PersonAddAlt1Icon />
        </button>
      )}
      {isPending && (
        <button disabled className="add-icon" onClick={() => handleClick()}>
          <PersonAddAlt1Icon />
          ...
        </button>
      )} */}

      <button className="add-icon" onClick={handleClick}>
        <PersonAddAlt1Icon />
      </button>
    </div>
  );
}
