import React, { useState } from "react";
import "../../Assets/Styles/loginPage.css";
import { BrowserRouter, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";

interface IUser {
  email: string;
  password: string;
  confirmPassword: string;
  isJoin: any;
  checkPassword: string;
}

type Traget = {
  name: string;
  value: string;
  checked: boolean;
  type: string;
};

export default function SimpleForm() {
  const [userData, setUserData] = useState<IUser>({
    email: "",
    password: "",
    confirmPassword: "",
    isJoin: false,
    checkPassword: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked }: Traget = e.target;

    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let checkPassword =
      userData.password === userData.confirmPassword
        ? "Successfully Sign up"
        : "Passwords do not match";
    console.log(checkPassword);
    let checkComment = userData.isJoin
      ? userData.password === userData.confirmPassword
        ? "Thanks for signing up for our  newsletter!" && navigate("/page")
        : ""
      : "";

    // navigate("/page");

    //router.navigate
    // console.log(checkComment);
  }

  console.log("User Data --->", userData);
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit} className="form--element">
        <input
          type="text"
          value={userData.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={userData.password}
          name="password"
          placeholder="Password"
          // id=""
          onChange={handleChange}
        />
        {/* {userData.password !== userData.confirmPassword && (
          <span>Password to not match</span>
        )} */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={userData.confirmPassword}
          name="confirmPassword"
          // id=""
          onChange={handleChange}
        />
        <span className="check">
          {userData.password !== userData.confirmPassword
            ? "Password do not namtch"
            : ""}
        </span>

        {/* {userData.password !== userData.confirmPassword ? (
          <span className="check">Password do not namtch</span>
        ) : (
          ""
        )} */}

        <label htmlFor="check">
          <input
            type="checkbox"
            name="isJoin"
            id="check"
            checked={userData.isJoin}
            onChange={handleChange}
          />
          I want to join the <br />
          <span>newsletter</span>
        </label>

        <button className="signup-btn">Signup</button>
      </form>
    </div>
  );
}
