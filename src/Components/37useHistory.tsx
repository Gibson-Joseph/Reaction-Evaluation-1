// import { BrowserRouter as Router} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// export default function History() {
//   const history = useNavigate();
//   // console.log(history);

//   const handleHistory = () => {
//     history("/login", { replace: true });
//   };

//   return (
//     <div>
//       <h1></h1>
//       <button>Go to Login</button>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
const History = () => {
  // const history = useHistory();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hi</h1>
      <button>Log in</button>
    </div>
  );
};
export default History;
