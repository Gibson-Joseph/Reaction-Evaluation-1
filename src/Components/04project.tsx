import "../Assets/Styles/04project.css";

interface IProps {
  name: string;
  phone: string;
  email: string;
  image: string;
  openSpots: string;
}

// export default function Items(props:IProps) {
//   return (
//     <div className="card">
//       <img className="cat" src={require("../Assets/Images/download1.jpeg")} alt="cat" />
//       <h1>Mr.Cat_1</h1>
//       <div className="phoneCall">
//         <img src={require("../Assets/Images/email-icon.png")} alt="phone" />
//         <p> <strong>122-456-7890</strong> </p>
//       </div>
//       <div className="email">
//         <img src={require("../Assets/Images/email-icon.png")} alt="" />
//         <p> <strong>xyz@gmail.com</strong> </p>
//       </div>
//     </div>
//   );
// }

///////////////////////////////

export default function Items(props: IProps) {
  return (
    <div className="card">
      {props.openSpots === "0" && (
        <div className="wanted">
          <strong> WANTED</strong>
        </div>
      )}
      <img className="cat" src={props.image} alt="cat" />
      <h1>{props.name}</h1>
      <div className="phoneCall">
        <img src={require("../Assets/Images/phone.png")} alt="phone" />
        <p>
          {" "}
          <strong>{props.phone}</strong>{" "}
        </p>
      </div>
      <div className="email">
        <img src={require("../Assets/Images/email-icon.png")} alt="" />
        <p>
          <strong>{props.email}</strong>{" "}
        </p>
      </div>
    </div>
  );
}
