//see https://dev.to/willamesoares/how-to-build-an-image-carousel-with-react--24na
import React from "react";
import "./Carousel.css";
import ImageSlide from "../ImageSlide/ImageSlide";
import Arrow from "../Arrow/Arrow";

function Carousel(props) {
  const imgUrls = props.url;
  const currentImageIndex = props.currentImageIndex;
  const setCurrentImageIndex = props.setCurrentImageIndex;

  function previousSlide() {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  }

  function nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  }
  return (
    <div className="carousel">
      <Arrow direction="left" clickFunction={previousSlide} glyph="&lsaquo;" />

      <ImageSlide
        url={imgUrls[currentImageIndex]}
        setShowCarousel={props.setShowCarousel}
      />

      <Arrow direction="right" clickFunction={nextSlide} glyph="&rsaquo;" />
    </div>
  );
}

export default Carousel;
