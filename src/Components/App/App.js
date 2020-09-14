// see https://www.flickr.com/services/api/flickr.photos.getPopular.htm
// see https://dev.to/jackhiston/5-ways-to-interact-with-your-flickr-photos-using-the-flickr-api-2lb0
import React, { useState } from "react";
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Carousel from "../Carousel/Carousel";

let key = "6c8f84a0083a820c5860e0c88e1ef6ca";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [urlImg, setUrlImgs] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [initialImage, setInitialImage] = useState(true);

  function handleClick(i) {
    setCurrentImageIndex(i);
    setShowCarousel(true);
  }

  function inputWord(input) {
    if (input) {
      setInitialImage(false);
      setShowLoading(true);
      fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${input}&extras=url_n&format=json&nojsoncallback=1&per_page=10`
      )
        .then((res) => {
          return res.json();
        })
        .then((photosObject) => {
          let photos = photosObject.photos.photo.map((photo) => {
            return photo.url_n;
          });
          setShowLoading(false);
          setUrlImgs(photos);
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
          <SearchBar onClick={inputWord} />
        </div>
        <div className="containerCarousel">
          {showLoading && (
            <div className="loading">
              <img src="https://miro.medium.com/max/1600/1*CsJ05WEGfunYMLGfsT2sXA.gif" />
            </div>
          )}
          {showCarousel && (
            <Carousel
              url={urlImg}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
              setShowCarousel={setShowCarousel}
            />
          )}
        </div>
        <div className="searchResults">
          {initialImage && (
            <div className="initialImage">
              <h2>Search for the most amazing images from Flickr</h2>
              <img src="https://i.pinimg.com/originals/b9/c4/2f/b9c42f0920d3eaa3cc7014a62edcbdc5.gif" />
            </div>
          )}
          <SearchResults
            url={urlImg}
            onClick={(i) => handleClick(i)}
            currentImageIndex={currentImageIndex}
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
