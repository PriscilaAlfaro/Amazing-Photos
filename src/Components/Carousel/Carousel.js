//see https://dev.to/willamesoares/how-to-build-an-image-carousel-with-react--24na
import React from "react";
import "./Carousel.css";
import ImageSlide from "../ImageSlide/ImageSlide";
import Arrow from "../Arrow/Arrow";

function Carousel(props) {
  const imgUrls = props.url;
  const currentImageIndex = props.currentImageIndex;
  const setCurrentImageIndex = props.setCurrentImageIndex;

  return (
    <div className="carousel">
      <ImageSlide
        url={imgUrls[currentImageIndex]}
        setShowCarousel={props.setShowCarousel}
      />
    </div>
  );
}

export default Carousel;
