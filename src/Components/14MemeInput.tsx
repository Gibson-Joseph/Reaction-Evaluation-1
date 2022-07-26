import React, { useEffect, useState } from "react";
import "../Assets/Styles/09meme.css";
import memesData from "../Components/16MemeData";

export default function MemeInput() {
  // console.log(memesData);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: memesData.data.mames[1].url,
  });
  const [allMemes, setAllMemes] = useState();

  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get.jpg")
  //     .then((res) => res.json())
  //     .then((data) => setAllMemes(data.data.mames));
  // }, []);

  // console.log(allMemes);

  const [isImage, setIsImage]: any = useState(memesData);
  function handleClick() {
    const memesArray = isImage.data.mames;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let imageLink = memesArray[randomNumber].url;
    setMeme({ ...meme, randomImage: imageLink });

    // setMeme((prevMeme) => ({
    //   ...prevMeme,
    //   randomImage: imageLink,
    // }));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMeme({ ...meme, [name]: value });
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          placeholder="Top Text"
          type="text"
          name="topText"
          value={meme.topText}
          id=""
          onChange={handleChange}
        />
        <input
          className="form--input"
          placeholder="Bottom Text"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          id=""
          onChange={handleChange}
        />

        <button onClick={handleClick} className="form--button">
          Get a new meme image
        </button>
      </div>
      <div>
        <img className="meme--image" src={meme.randomImage} alt="" />
        <h3 className="img--h3--1">{meme.topText}</h3> <br />
        <h3 className="img--h3--2">{meme.bottomText}</h3>
      </div>
    </main>
  );
}

///////////////

// import { useState } from "react";
// import memesData from "../Components/16MemeData";
// export default function Name() {
//   const [isData, setIsData]: any = useState(memesData);
//   function handleClick() {
//     const arr = isData.data.list[0].firstName;
//     setIsData(arr);
//   }
//   return (
//     <div>
//       <h1>{isData}</h1>
//       <button onClick={handleClick}>click</button>
//     </div>
//   );
// }
