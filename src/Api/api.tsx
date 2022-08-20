import axios from "axios";
export async function getUser() {
  try {
    const res = await axios.get("http://localhost:3006/customers");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export function postUser(data: any) {
  axios.post("http://localhost:3006/customers", data);
  // .then((res) => {
  //   return res.data;
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
}

// export async function getUser() {
//   try {
//     const res = await axios.get("http://localhost:3006/customers");
//     return res.data;
//   } catch (err) {
//     console.log(err);
//   }
// }
