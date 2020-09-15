//see https://dev.to/willamesoares/how-to-build-an-image-carousel-with-react--24na
import React from "react";
import "./Carousel.css";
import ImageSlide from "../ImageSlide/ImageSlide";

function Carousel(props) {
  return (
    <div className="carousel">
      <ImageSlide url={props.url[props.currentImageIndex]} />
    </div>
  );
}

export default Carousel;
