import React, { useState } from "react";
import "../Assets/Styles/09meme.css";
import memesData from "../Components/16MemeData";

export default function MemeInput() {
  // console.log(memesData);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: memesData.data.mames[1].url,
  });
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
      <img className="meme--image" src={meme.randomImage} alt="" />
    </main>
  );
}

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
