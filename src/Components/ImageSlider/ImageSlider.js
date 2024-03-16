import React, { useState } from "react";
import "./ImageSlider.css";
import arch from "../Images/HomeCategories/architect.jpg";
import busi from "../Images/HomeCategories/business.jpg";
import fit from "../Images/HomeCategories/fitness.jpg";
import lan from "../Images/HomeCategories/language.jpg";
import perdev from "../Images/HomeCategories/personal-dev.jpg";
import prog from "../Images/HomeCategories/programming.jpg";
import sci from "../Images/HomeCategories/science.jpg";
import teach from "../Images/HomeCategories/teaching.jpg";

const ImageSlider = () => {
  const images = [
    { src: perdev, caption: "Personal Development" },
    { src: prog, caption: "Technology and Programming" },
    { src: teach, caption: "Teaching and Learning" },
    { src: fit, caption: "Health and Fitness" },
    { src: busi, caption: "Business and Entrepreneurship" },
    { src: arch, caption: "Architecture and Engineering" },
    { src: sci, caption: "Science and Mathematics" },
    { src: lan, caption: "Language and Communication" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={goToPrevSlide}>
        Previous
      </button>
      <div className="slide">
        <img className="slid-img" src={images[currentIndex].src} alt="Slide" />
        <div className="caption">{images[currentIndex].caption}</div>
      </div>
      <button className="next-btn" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
