import React from "react";
import Ghost from "../Assets/Images/ghost.png";
import "../Assets/Styles/09meme.css";

export default function MemeHeader() {
  return (
    <header className="header">
      <img className="header--image" src={Ghost} alt="Ghost-Logo" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
