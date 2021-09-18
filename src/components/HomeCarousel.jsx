import React from "react";
import "../index.css";
import ButtonCarousel from "./ButtonCarousel";
import "./homeCarousel.css";

const HomeCarousel = () => {
  return (
    <div className="carousel-container">
      <video src="/video/video-2.mp4" autoPlay loop muted />
      <h1>SEEK REINVENTION</h1>
      <p>¿What are you waiting for?</p>
      <div className="carousel-btns">
        <ButtonCarousel
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </ButtonCarousel>
        <ButtonCarousel
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          MORE INFO <i className="fa fa-arrow-right" aria-hidden="true" />
        </ButtonCarousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
