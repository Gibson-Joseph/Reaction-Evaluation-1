import React from "react";
import starIcon from "../Assets/Images/star-icon.png";
import "../Assets/Styles/07shirt.css";

// type Item = {
//   title: string;
//   price: string;
//   location: string;
//   openSpots: number;
//   image: any;
//   reting: number;
//   reviewCount: number;
// };

interface IShirt {
  id?: number;
  title: string;
  price: string;
  location: string;
  openSpots: number;
  image: any;
  reting: number;
  reviewCount: number;
  // item1: Item;
}

export default function ShirtsCards(props: IShirt) {
  let badgeText: string | number | undefined;
  if (props.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="container">
      {badgeText && <div className="soldOut--Badge">{badgeText}</div>}
      <img className="shirt" src={props.image} alt="shirt-1" />
      <div className="content">
        <div className="rating">
          <img className="star-icon" src={starIcon} alt="star-icon" />
          <p>
            {props.reting}({props.reviewCount}) &bull; {props.location}
          </p>
        </div>

        <h4>{props.title}</h4>
        <p className="price">
          <strong>Price:</strong> &#8377; <strong>{props.price}</strong> / men
        </p>
      </div>
    </div>
  );
}
