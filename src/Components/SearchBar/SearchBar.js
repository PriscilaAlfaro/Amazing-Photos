import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    const word = e.target.value;
    setInputValue(word);
  }

  return (
    <div className="SearchBar">
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="I am feeling lucky"
      />
      <button
        className="SearchButton"
        onClick={() => {
          props.onClick(inputValue);
        }}
      >
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
