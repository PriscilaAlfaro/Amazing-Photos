import React from "react";
import "./ImageSlide.css";

const ImageSlide = (props) => {
  return (
    <div className="mainImage-container">
      <img className="image-slide" alt="" src={props.url} />
    </div>
  );
};

export default ImageSlide;
