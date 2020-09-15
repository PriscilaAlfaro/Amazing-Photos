// see https://www.flickr.com/services/api/flickr.photos.getPopular.htm
// see https://dev.to/jackhiston/5-ways-to-interact-with-your-flickr-photos-using-the-flickr-api-2lb0
import React, { useState } from "react";
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Modal from "../Modal/Modal";

let key = "6c8f84a0083a820c5860e0c88e1ef6ca";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [urlImg, setUrlImgs] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [initialImage, setInitialImage] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [noResults, setNoResults] = useState(false);

  function handleClick(i) {
    setCurrentImageIndex(i);
  }

  function inputWord(input) {
    if (input) {
      setInitialImage(false);
      setShowLoading(true);
      fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&is_getty=true&text=${input}&extras=url_c&format=json&nojsoncallback=1&per_page=10`
      )
        .then((res) => {
          return res.json();
        })
        .then((photosObject) => {
          let photos = photosObject.photos.photo
            .filter((photo) => photo.url_c)
            .map((photo) => {
              return photo.url_c;
            });
          setTimeout(() => {
            setShowLoading(false);
            photos.length === 0 ? setNoResults(true) : setNoResults(false);
            setUrlImgs(photos);
          }, 1000);
        });
    } else {
      setUrlImgs([]);
    }
  }

  return (
    <section>
      <header>
        <div className="header__bg"></div>
        <div className="header__title">
          <h1>Amazing Photos</h1>
        </div>
      </header>

      <section className="results">
        <div className="containerSearchBar">
          <SearchBar
            onClick={inputWord}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
        <div className="containerCarousel">
          {showLoading && (
            <div className="loading">
              <img
                alt="Loading"
                src="https://lh3.googleusercontent.com/proxy/T3NyMC83iIfVAI-CFRNp5UmURVgS7YTmDxA3_QlXYc6sq-2dtJpKEHdmwA6lUaI4g0dTtbXU19x42qTO5EVovEWfhWamynk"
              />
            </div>
          )}
          {noResults && (
            <div className="noResults">
              <img
                alt="No Result Found"
                src="https://www.shaadibaraati.com/assets/img/no-result.png"
              />
            </div>
          )}
          {showModal && (
            <Modal
              url={urlImg}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
              setShowModal={setShowModal}
              onClick={(i) => handleClick(i)}
            />
          )}
        </div>
        <div className="searchResults">
          {initialImage && (
            <div className="initialImage">
              <h2>Search for the most amazing images from Flickr</h2>
              <img
                alt=""
                src="https://i.pinimg.com/originals/b9/c4/2f/b9c42f0920d3eaa3cc7014a62edcbdc5.gif"
              />
            </div>
          )}
          <SearchResults
            url={urlImg}
            onClick={(i) => handleClick(i)}
            currentImageIndex={currentImageIndex}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </section>
      <footer>
        <h2>Contact</h2>
        <h5>priscila24n@hotmail.com</h5>
        <h5>CopyRigth Amazing Photos</h5>
      </footer>
    </section>
  );
}

export default App;
