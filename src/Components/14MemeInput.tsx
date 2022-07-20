import React, { useState } from "react";
import "../Assets/Styles/09meme.css";
import memesData from "../Components/16MemeData";

export default function MemeInput() {
  const [isImage, setIsImage]: any = useState();
  function handleClick() {
    const memesArray = memesData.data.mames;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let imageLink = memesArray[randomNumber].url;
    setIsImage(imageLink);
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          placeholder="Top Text"
          type="text"
          name=""
          id=""
        />
        <input
          className="form--input"
          placeholder="Bottom Text"
          type="text"
          name=""
          id=""
        />

        <button onClick={handleClick} className="form--button">
          Get a new meme image
        </button>
      </div>
      <img className="meme--image" src={isImage} alt="" />
    </main>
  );
}
