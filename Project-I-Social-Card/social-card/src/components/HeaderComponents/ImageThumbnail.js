import React from "react";
import "./Header.css";

function ImageThumbnail({imageSrc}) {
  return (
    <div className="header-logo">
      <img src={imageSrc} alt="lambda logo" />
    </div>
  );
}

export default ImageThumbnail;
