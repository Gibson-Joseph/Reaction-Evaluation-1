import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function PageNavigation() {
  const navigate = useNavigate();
  function Click() {
    navigate("login");
  }
  console.log(navigate);
  return (
    <div>
      <h1>home page</h1>
      <button onClick={Click}>please login!</button>
    </div>
  );
}
