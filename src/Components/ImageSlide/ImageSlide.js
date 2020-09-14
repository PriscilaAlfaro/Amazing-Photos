import React from "react";
import "./ImageSlide.css";

const ImageSlide = (props) => {
  const styles = {
    backgroundImage: `url(${props.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <button onClick={() => props.setShowCarousel(false)}>X</button>
      <div className="image-slide" style={styles}></div>
    </div>
  );
};

export default ImageSlide;
