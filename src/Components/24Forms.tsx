import { useState } from "react";
import "../Assets/Styles/24Form.css";
type User = {
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
  isFriendly: any;
  employment: string;
  favColor: string;
};

export default function Form() {
  const [userData, setUserData] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    employment: "",
    isFriendly: false,
    favColor: "",
  });

  console.log(userData);

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.FormEvent
  ) {
    const { name, value, type, checked }: any = e.target;

    // setUserData({ ...userData, [name]: value });
    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(userData);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form--container">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            value={userData.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            value={userData.lastName}
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            value={userData.email}
          />

          <label htmlFor="textArea">Text Area</label>
          <textarea
            onChange={handleChange}
            name="comments"
            id="textArea"
            placeholder="Commants"
            value={userData.comments}
          />
        </div>

        <input
          type="checkbox"
          id="checkBox"
          checked={userData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />
        <label htmlFor="checkBox">Are you Friendly?</label>

        <fieldset>
          <legend>Current Employment Status</legend>

          <label htmlFor="unemployed">
            <input
              type="radio"
              name="employment"
              id="unemployed"
              value="unemployed"
              onChange={handleChange}
              checked={userData.employment === "unemployed"}
            />
            Unemployed
          </label>

          <label htmlFor="part-time">
            <input
              type="radio"
              name="employment"
              id="part-time"
              value="part-time"
              onChange={handleChange}
              checked={userData.employment === "part-time"}
            />
            Part-time
          </label>

          <label htmlFor="full-time">
            <input
              type="radio"
              name="employment"
              id="full-time"
              value="full-time"
              onChange={handleChange}
              checked={userData.employment === "full-time"}
            />{" "}
            Full-time
          </label>
        </fieldset>
        <br />
        <label htmlFor="favColor">What is your favorite color?</label>
        <select
          name="favColor"
          id="favColor"
          value={userData.favColor}
          onChange={handleChange}
        >
          <option value="">--Choose--</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
