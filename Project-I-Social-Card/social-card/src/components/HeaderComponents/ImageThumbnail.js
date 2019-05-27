import React from "react";
import "./Header.css";

function ImageThumbnail(props) {
  return (
    <div className="header-logo">
      <img src={props.imageSrc} alt="lambda logo" />
    </div>
  );
}

export default ImageThumbnail;
