//see https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

import React from "react";
import "./Modal.css";
import Carousel from "../Carousel/Carousel";
import SearchResults from "../SearchResults/SearchResults";
import Arrow from "../Arrow/Arrow";

function Modal(props) {
  const handleClose = props.handleClose;
  const show = props.show;
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
    <div className="modal">
      <section className="modal-content">
        <button onClick={() => props.setShowModal(false)}>X</button>
        <Carousel
          url={props.url}
          currentImageIndex={props.currentImageIndex}
          setCurrentImageIndex={props.setCurrentImageIndex}
          setShowCarousel={props.setShowCarousel}
        />
        <div className="inferiorBar">
          <Arrow
            direction="left"
            clickFunction={previousSlide}
            glyph="&lsaquo;"
          />

          <div className="image-content">
            <div className="image">
              {props.url.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    className={index === currentImageIndex ? "opacity" : ""}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <Arrow direction="right" clickFunction={nextSlide} glyph="&rsaquo;" />
        </div>
      </section>
    </div>
  );
}

export default Modal;
