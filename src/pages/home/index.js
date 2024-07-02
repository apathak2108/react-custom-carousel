import React, { useEffect, useState } from "react";
import {
  StyledButton,
  StyledIcon,
  StyledImage,
  StyledSlider,
} from "./home.styled";
import ImageOne from "../../images/1.jpeg";
import ImageTwo from "../../images/2.jpeg";
import ImageThree from "../../images/3.jpeg";
import ImageFour from "../../images/4.jpg";
import "./home.css";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    initializeSlider();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const initializeSlider = () => {
    const id = setInterval(() => {
      nextSlide();
    }, 3000);
    setIntervalId(id);
  };

  const showSlide = (index) => {
    const slides = document.querySelectorAll(".styled-image");
    let newIndex = index;
    if (index >= slides.length) {
      newIndex = 0;
    } else if (index < 0) {
      newIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
      slide.classList.remove("displaySlide");
    });
    slides[newIndex].classList.add("displaySlide");
    setSlideIndex(newIndex);
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      showSlide(newIndex);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      showSlide(newIndex);
      return newIndex;
    });
  };

  return (
    <StyledSlider>
      {[
        { src: ImageOne, alt: "image-one" },
        { src: ImageTwo, alt: "image-two" },
        { src: ImageThree, alt: "image-three" },
        { src: ImageFour, alt: "image-four" },
      ].map((image, index) => (
        <img
          key={index}
          className={`styled-image ${index === slideIndex ? "displaySlide" : ""}`}
          src={image.src}
          alt={image.alt}
        />
      ))}
      <StyledIcon
        src="https://img.icons8.com/?size=100&id=26144&format=png&color=000000"
        alt="prev-icon"
        style={{ left: "0" }}
        onClick={prevSlide}
      />
      <StyledIcon
        src="https://img.icons8.com/?size=100&id=26138&format=png&color=000000"
        alt="next-icon"
        style={{ right: "0" }}
        onClick={nextSlide}
      />
    </StyledSlider>
  );
};

export default Home;
