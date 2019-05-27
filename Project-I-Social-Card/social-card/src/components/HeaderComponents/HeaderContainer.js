import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const { textContent, imageSrc, heading, text, date } = {
  textContent: `Let's learn react by building simple interfaces with components. Don't try to overthink it, just keep it simple and fun. Once you feel comfortable using components, you are well on your way to mastering react!`,
  imageSrc:
    "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
  heading: "Lambda School",
  text: "@LambdaSchool",
  date: "26 jan"
};

function HeaderContainer() {
  return (
    <div className="header-container">
      <ImageThumbnail imageSrc={imageSrc} />
      <div className="header-content">
        <HeaderTitle heading={heading} text={text} date={date} />
        <HeaderContent text={textContent} />
      </div>
    </div>
  );
}

export default HeaderContainer;
