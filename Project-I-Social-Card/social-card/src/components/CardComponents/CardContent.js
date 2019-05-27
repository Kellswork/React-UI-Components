import React from "react";
import "./Card.css";

function CardContent({ heading, text, linkText }) {
  return (
    <div className='card-content'>
      <h3>{heading}</h3>
      <p>{text}</p>
      <p className='link-text'>{linkText}</p>
    </div>
  );
}

export default CardContent;
