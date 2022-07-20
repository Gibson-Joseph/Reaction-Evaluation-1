import React from "react";
import Reactlogo from "../Assets/Images/React-icon.png";
import "../Assets/Styles/02challenge.css";

function ChallengeTwo() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
export default ChallengeTwo;

function Header() {
  return (
    <header>
      <nav className="navBar">
        <img className="nav-logo" src={Reactlogo} alt="React-icon" />

        <ul className="list">
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons i'm execited to learn React</h1>
      <ol>
        <li>
          it is popular library. so i'll be able to fit in with the cool kids!
        </li>
        <li>I more likely to get a job a developer if i know React</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>&#169; 2022 Gibson Developement, All right reserved.</small>
    </footer>
  );
}
