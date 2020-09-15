import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  function handleChange(e) {
    const word = e.target.value;
    props.setInputValue(word);
  }

  return (
    <div className="SearchBar">
      <input
        type="text"
        onChange={handleChange}
        value={props.inputValue}
        placeholder="I am feeling lucky"
      />
      <button
        className="SearchButton"
        onClick={() => {
          props.onClick(props.inputValue);
        }}
      >
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
