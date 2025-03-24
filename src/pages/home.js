import React from "react";
import ImageSilder from "../components/ImageSilder";

import sliderOne from "../images/homePage/slider-1.jpg";
import sliderTwo from "../images/homePage/slider-2.jpg";
import sliderThree from "../images/homePage/slider-3.jpg";

import HomeProductComp from "../components/home/products";
import HowItsMade from "../components/home/howItsMade";

const Home = () => {
  const text =
    "Our journey began with a simple yet powerful idea: to create snacks that are not only tasty but also wholesome.";

  return (
    <React.Fragment>
      <ImageSilder images={[sliderThree, sliderTwo, sliderOne]} />
      <HomeProductComp />
      <HowItsMade />
    </React.Fragment>
  );
};

export default Home;
