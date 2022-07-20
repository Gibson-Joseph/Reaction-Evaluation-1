import React from "react";
import catDetail from "../Components/08catdetail";
import Items from "./04project";
import "../Assets/Styles/06mapcat.css";

export default function MapCatDetail() {
  const catCard = catDetail.map((item) => {
    return (
      <Items
        openSpots={item.openSpots}
        key={item.id}
        name={item.name}
        phone={item.phone}
        email={item.email}
        image={item.image}
      />
    );
  });
  console.log(catDetail);

  return (
    <nav className="parent">
      <div className="cards">{catCard}</div>
    </nav>
  );
}
