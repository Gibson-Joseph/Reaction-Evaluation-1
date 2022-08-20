import React, { Ref, RefObject, useEffect, useState } from "react";
import "../../Assets/Styles/edit.css";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

interface Iuser {
  firstname: string;
  lastname: string;
  email: string;
  mobile: number;
  Location?: any;
  id?: number;
}
export default function Edit() {
  const [editData, setEditData] = useState<Iuser>({
    firstname: "",
    lastname: "",
    email: "",
    mobile: 0,
  });
  const location = useLocation().state as Iuser;
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    setEditData({ ...location });
    inputRef.current?.focus();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  }
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Customer", { state: editData });
  }

  console.log(editData);

  return (
    <div className="parent">
      <h1>Edit Customer</h1>
      <div className="container">
        <div className="input">
          <label htmlFor="">First Name</label>
          <input
            ref={inputRef}
            type="text"
            name="firstname"
            value={editData.firstname}
            onChange={handleChange}
          />
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={editData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={editData.email}
            onChange={handleChange}
          />
          <label htmlFor="">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={editData.mobile}
            onChange={handleChange}
          />
        </div>
      </div>
      <button onClick={() => handleClick()} className="add--icon">
        <AddTaskIcon />
      </button>
    </div>
  );
}
