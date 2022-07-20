import React from "react";
import Items from "./04project";
import "../Assets/Styles/05collection.css";

export default function ItemsCollection() {
  return (
    <div className="itemList">
      <Items
        name="MR.Gibbs"
        phone="(123) 456-7890"
        email="gibson@gmail.com"
        image={require("../Assets/Images/download1.jpeg")}
        openSpots="0"
      />
      <Items
        name="MR.Ben"
        phone="(567) 019-357"
        email="ben@gmail.com"
        openSpots="0"
        image={require("../Assets/Images/download2.jpeg")}
      />
      <Items
        name="MR.Kathish"
        phone="(576) 345-1237"
        email="kathis@gmail.com"
        openSpots="0"
        image={require("../Assets/Images/download3.jpeg")}
      />
      <Items
        name="MR.Vijay"
        phone="(123) 456-7890"
        email="vijay@gmail.com"
        openSpots="0"
        image={require("../Assets/Images/download4.jpeg")}
      />
    </div>
  );
}
