// import React from "react";
import React, { ChangeEvent, useState } from "react";
import "../Assets/Styles/login.css";

export function LoginPage() {
  interface IUser {
    email: string;
    password: number;
  }

  interface IDetails {
    name: string;
    value: string | number;
  }

  let detail: IUser;
  let setdetail: any;
  [detail, setdetail] = useState({ email: "", password: 0 });

  function handleChange(e: ChangeEvent<IDetails>) {
    let objName = e.target.name;
    let objValue = e.target.value;
    setdetail({ ...detail, [objName]: objValue });
  }

  function handleClick() {
    console.log(detail);
    res(detail).then(async (data) => {
      data.json().then((data) => {
        console.log("Data is", data);
      });
    });
  }

  async function res(params: object) {
    const response = await fetch("http://192.168.235.60:3000/v1/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const body = await response;
    return body;
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Login</h1>
        <input
          type="text"
          id="a"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          id="b"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button id="sub" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
}
