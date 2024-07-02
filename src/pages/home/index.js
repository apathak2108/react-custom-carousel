import React from "react";
import { StyledButton, StyledIcon, StyledImage, StyledSlider } from "./home.styled";
import ImageOne from "../../images/1.jpeg";
import ImageTwo from "../../images/2.jpeg";
import ImageThree from "../../images/3.jpeg";
import ImageFour from "../../images/4.jpg";

const Home = () => {
  return (
    <StyledSlider>
      <StyledImage src={ImageOne} alt="image-one" />
      {/* <StyledImage src={ImageTwo} alt="image-two" />
      <StyledImage src={ImageThree} alt="image-three" />
      <StyledImage src={ImageFour} alt="image-four" /> */}
      <StyledIcon src="https://img.icons8.com/?size=100&id=26144&format=png&color=000000" alt="prev-icon" style={{left:'0'}} />
      <StyledIcon src="https://img.icons8.com/?size=100&id=26138&format=png&color=000000" alt="next-icon" style={{right:'0'}}/>
    </StyledSlider>
  );
};

export default Home;
