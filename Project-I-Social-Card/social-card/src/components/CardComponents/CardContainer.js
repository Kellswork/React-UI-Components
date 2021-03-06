import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";

const {link, imageSrc} = {
  link: "https://www.reactjs.org",
  imageSrc: "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"

}

function CardContainer() {
  return (
    <a href={link}>
      <div className="card-container">
        <CardBanner imageSrc={imageSrc} />
      </div>
    </a>
  );
}

export default CardContainer;
