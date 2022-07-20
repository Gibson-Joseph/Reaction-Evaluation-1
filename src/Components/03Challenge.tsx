import React from "react";
import ReactLogo from "../Assets/Images/React-icon.png";
import "../Assets/Styles/03challenge.css";
function NaveBar() {
  return (
    <nav className="NavContainer">
      <nav className="NavigationBar">
        <img className="ReactIcon" src={ReactLogo} alt="React-log" />
        <h3>ReactFacts</h3>
      </nav>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}

function Content() {
  return (
    <article>
      <h1>Fun fact about React</h1>
      <ul>
        <li>
          <span>Was first released in 2013</span>
        </li>
        <li>
          <span> Was originally created by Jorden Walke</span>
        </li>
        <li>
          <span>Has well over 1000k stars on G</span>
        </li>
        <li>
          <span>Is mainted by Facebook</span>
        </li>
        <li>
          <span>
            Powers thousand of enterprise apps, including monbile apps.
          </span>
        </li>
      </ul>
    </article>
  );
}

export default function Container() {
  return (
    <div className="mainContent">
      <NaveBar />
      <Content />
    </div>
  );
}
