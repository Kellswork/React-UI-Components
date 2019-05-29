import React from "react";
import "./Card.css";
import CardContent from "./CardContent";

const { heading, text, linkText } = {
  heading: "Get Started with React",
  text:
    "React makes it painless to create interactive UIs. Design simple views for each state in your application.",
  linkText: "reactjs.org"
};

function CardBanner({ imageSrc }) {
  return (
    <div className="card-banner">
      <img src={imageSrc} alt="react logo" />
      <CardContent heading={heading} text={text} linkText={linkText} />
    </div>
  );
}

export default CardBanner;
