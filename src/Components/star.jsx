import React, { useState } from "react";
import Star from "../Assets/Images/star-empty.svg";
import "../Assets/Styles/star.css";

export default function Stars() {
  const [isActive, setIsActive] = useState();
  function handleClick(index) {
    console.log("handle click got called");
    setIsActive(index);
  }

  const stars = [Star, Star, Star, Star, Star];
  return (
    <div className="star">
      {stars.map((item, index) => (
        <button onClick={() => handleClick(index)}>
          <img
            id={index}
            className={` ${
              isActive === index
                ? "selectStar"
                : isActive > index
                ? "beforeStar"
                : isActive < index
                ? "afterStar"
                : "defaultStar"
            }`}
            src={item}
            alt="star"
          />
        </button>
      ))}
    </div>
  );
}
