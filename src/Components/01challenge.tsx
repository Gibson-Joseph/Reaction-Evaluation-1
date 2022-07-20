import React from "react";
import "../Assets/Styles/01challenge.css";
function ReactPage() {
  return (
    <div className="container">
      <img
        src={require("../Assets/Images/React-icon.png")}
        width="40px"
        height="40px"
        alt="React-logo"
      />
      <h1>Fun Fact about React</h1>
      <div>
        <ul>
          <li>was first released in 2013</li>
          <li>
            Was originally created by <strong>Jorden Walke</strong>
          </li>
          <li>Hes wel over 100k Stars in GitHub</li>
          <li>It mainted by FaceBook</li>
          <li>Powers thousands of enterprise apps, including Mobile apps</li>
        </ul>
      </div>
    </div>
  );
}
export default ReactPage;
