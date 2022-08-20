import React from "react";
import { useEffect, useState, useMemo } from "react";
import { getUser } from "../../Api/api";
import Data from "../http";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../../Assets/Styles/customer.css";
import AddUser from "../../Components/Poc/add";

import { useNavigate } from "react-router-dom";
import Items from "../04project";

interface Iuser {
  firstname: string;
  lastname: string;
  email: string;
  mobile: number;
  id: number;
}

export default function Customer() {
  const [userDetail, setUserDetail] = useState<Iuser[]>([]);
  const [isPending, setIsPending] = useState(true);

  const navigate = useNavigate();

  function getUsers() {
    getUser().then((res: any) => {
      setUserDetail(res);
      setIsPending(false);
    });
  }

  // const memo = useMemo(() => addData(), []);

  useEffect(() => {
    // getUser().then((res: any) => {
    //   setUserDetail(res);
    //   // setIsPending(false);
    // });
    // userDetail;
    getUsers();
  }, []); //<--when i put the value in dependency array, my db and component is infinitive rendere.

  function handleEdit(id: number) {
    console.log("Edit id -->", id);
    const index = id;
    // navigate("/Edit", { state: userDetail.find((val) => val.id === id) });

    navigate("/Edit", { state: userDetail[index] });
  }

  function handleDelete(id: number) {
    fetch(`http://localhost:3006/customers/${id}`, {
      method: "DELETE",
    });
    console.log("Delete id -->", id);
    setUserDetail(userDetail.filter((value, index) => id !== index));
  }

  function addData() {
    console.log("add data got called");
    // fetch("http://localhost:3006/customers", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   mode: "cors",
    //   body: JSON.stringify(data),
    // }).then(() => {
    //   console.log("new list addes");
    //   getUsers();
    // });
  }

  if (isPending) {
    return <div>Loading ...</div>;
  }

  return (
    // <React.StrictMode>
    <div>
      <table>
        <tbody>
          <tr className="table-row">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Edit</th>
          </tr>
          {userDetail.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.firstname}</td>
                <td>{value.lastname}</td>
                <td>{value.email}</td>
                <td>{value.mobile}</td>
                <td>
                  <button
                    type="button"
                    className="edit-icon"
                    onClick={() => handleEdit(index)}
                  >
                    <BorderColorIcon />
                  </button>
                  <button
                    className="delete-icon"
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteForeverIcon />
                  </button>
                </td>
              </tr>
            );
          })}
          {/* {showPost} */}
        </tbody>
      </table>
      <AddUser userData={getUsers} />
    </div>
    // </React.StrictMode>
  );
}

/////////
//Method - 1

// const [showPost, setShowPost] = useState();
// let displayData;
// const apiUrl = "http://localhost:3006/customers";
// function pullJson() {
//   fetch(apiUrl)
//     .then((res) => res.json())
//     .then((res) => {
//       // console.log(res);
//       displayData = res.map((value: any, index: any) => {
//         return (
//           <tr key={index}>
//             <td>{value.firstname}</td>
//             <td>{value.lastname}</td>
//             <td>{value.email}</td>
//             <td>{value.mobile}</td>
//             <td>
//               <button
//                 type="button"
//                 className="edit-icon"
//                 onClick={() => handleEdit(index)}
//               >
//                 <BorderColorIcon />
//               </button>
//               <button
//                 className="delete-icon"
//                 onClick={() => handleDelete(index)}
//               >
//                 <DeleteForeverIcon />
//               </button>
//             </td>
//           </tr>
//         );
//       });
//       setShowPost(displayData);
//     });
// }

// useEffect(() => {
//   pullJson();
// }, []);
///////

// // method - 2
//   const [showPost, setShowPost] = useState();
//   let displayData;
//   async function pullJson() {
//     const res = await fetch("http://localhost:3006/customers");
//     const resData = await res.json();
//     console.log(resData);
//     displayData = resData.map((value: any, index: any) => {
//       return (
//         <tr key={index}>
//           <td>{value.firstname}</td>
//           <td>{value.lastname}</td>
//           <td>{value.email}</td>
//           <td>{value.mobile}</td>
//           <td>
//             <button
//               type="button"
//               className="edit-icon"
//               onClick={() => handleEdit(index)}
//             >
//               <BorderColorIcon />
//             </button>
//             <button className="delete-icon" onClick={() => handleDelete(index)}>
//               <DeleteForeverIcon />
//             </button>
//           </td>
//         </tr>
//       );
//     });
//     setShowPost(displayData);
//     // });
//   }
//   useEffect(() => {
//     pullJson();
//   }, []);
