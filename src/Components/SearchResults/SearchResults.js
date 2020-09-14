import React from "react";
import Image from "../Image/Image";
import "./SearchResults.css";

function SearchResults(props) {
  const urlImg = props.url;

  return (
    <div className="flex-container">
      {urlImg.map((img, index) => {
        return (
          <Image
            url={img}
            onClick={() => props.onClick(index)}
            key={index}
            showModal={props.showModal}
            setShowModal={props.setShowModal}
            selected={props.currentImageIndex === index}
          />
        );
      })}
    </div>
  );
}

export default SearchResults;
