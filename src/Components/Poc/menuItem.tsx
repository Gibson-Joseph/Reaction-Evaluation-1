import "../../Assets/Styles/35project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const N_bar = () => {
  const [menu, setMenu] = useState(false);

  function handleClick() {
    setMenu(!menu);
    console.log(menu);
  }

  const navigate = useNavigate();
  function Click() {
    navigate("/about");
  }

  function customerClick() {
    navigate("/Customer");
  }

  return (
    <div id="head">
      {menu && (
        <div>
          <nav id="n1">
            <span className="span">
              <img src={require("../../Assets/Images/download1.jpeg")} />
              Admin
            </span>
          </nav>
          <nav id="n2">
            <div className="side">
              <InsertChartIcon className="icon" />
              <a href="">DashBoard</a>
            </div>
            <div className="side" onClick={customerClick}>
              <PersonOutlineOutlinedIcon className="icon" />
              <a href="">Customer</a>
            </div>
            <div className="side">
              <ShoppingCartOutlinedIcon className="icon" />
              <a href="">Order</a>
            </div>
            <div className="side">
              <AddBusinessOutlinedIcon className="icon" />
              <a href="">Product</a>
            </div>
            <div className="side">
              <InfoOutlinedIcon className="icon" />
              <a onClick={Click} href="">
                About
              </a>
            </div>
          </nav>
        </div>
      )}
      <div>
        <nav id="nb_style">
          <MenuIcon onClick={handleClick} className="menu" />
          <h5>Demo </h5>
          <GitHubIcon className="github" />
        </nav>
      </div>
    </div>
  );
};
export default N_bar;
