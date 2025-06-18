import React from "react";
import ImageSilder from "../components/ImageSilder";

import sliderOne from "../images/homePage/slider-1.jpg";
import sliderTwo from "../images/homePage/slider-2.jpg";
import sliderThree from "../images/homePage/slider-4.jpg";
import fullView from "../images/homePage/full-view.jpg";

import HomeProductComp from "../components/home/products";
import HowItsMade from "../components/home/howItsMade";

const Home = () => {
  const handleImageClick = () => {
    window.open('https://mobite.dotpe.in/store/1/delivery#6096061', '_blank');
  };

  return (
    <React.Fragment>
      <ImageSilder images={[sliderThree, sliderOne, sliderTwo]} />
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <img 
          src={fullView} 
          alt="banner"
          onClick={handleImageClick}
          style={{
            width: '100%',
            height: 'auto',
            cursor: 'pointer',
            maxWidth: '100%',
            display: 'block',
            objectFit: 'cover'
          }}
        />
      </div>
      <HomeProductComp />
      <HowItsMade />
    </React.Fragment>
  );
};

export default Home;
