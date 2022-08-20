// import "../Assets/Styles/about.css";s
import "../../Assets/Styles/about.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  function Click() {
    navigate("/page");
  }
  return (
    <div>
      <ArrowBackIosNewIcon className="Arrow" onClick={Click} />
      <h1>About</h1>
      <p>
        the copyright symbol ©, or the words "Copyright" or "Copr." if website
        is published, the year of publication, and. the name of the copyright
        owner.
      </p>
    </div>
  );
}
