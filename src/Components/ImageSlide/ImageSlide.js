import React from "react";
import "./ImageSlide.css";

const ImageSlide = (props) => {
  const styles = {
    backgroundImage: `url(${props.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="mainImage-container">
      <div className="image-slide" style={styles}></div>
    </div>
  );
};

export default ImageSlide;
