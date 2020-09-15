import React from "react";
import "./SearchResults.css";
import Image from "../Image/Image";

function SearchResults(props) {
  return (
    <div className="flex-container">
      {props.url.map((img, index) => {
        return (
          <Image
            key={index}
            url={img}
            onClick={() => props.onClick(index)}
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
