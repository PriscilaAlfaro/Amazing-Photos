import React from "react";
import "./Image.css";

//see: https://scriptverse.academy/tutorials/reactjs-add-class-conditionally.html
function Image(props) {
  const urlImgs = props.url;

  return (
    <div className="item" onClick={props.onClick}>
      <img src={urlImgs} className={props.selected ? "border" : ""} alt="" />
    </div>
  );
}

export default Image;
