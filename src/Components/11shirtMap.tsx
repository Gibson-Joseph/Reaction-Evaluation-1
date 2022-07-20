import React from "react";
import shirtData from "../Components/10dataShirt";
import ShirtsCards from "../Components/12shirtCards";
import "../Assets/Styles/08cards.css";

export default function ShirtMap() {
  const cards = shirtData.map((item) => (
    // <ShirtsCards
    //   key={item.id}
    //   image={item.image}
    //   rating={item.reting}
    //   reviewCount={item.reviewCount}
    //   title={item.title}
    //   price={item.price}
    //   location={item.location}
    //   openSpots={item.openSpots}
    // />
    <ShirtsCards
      key={item.id}
      // item1={item}
      {...item}
    />
  ));
  return (
    <nav>
      <div className="cards">{cards}</div>
    </nav>
  );
}
