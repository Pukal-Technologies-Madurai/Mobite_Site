import * as React from "react";
import FixedHeader from "../components/header/fixedHeader";
import HomeComp from "..";
import '../styles/style.css';
import '../styles/global.css';
import sliderIMG1 from '../images/homePage/slider-design12.jpg';
import sliderIMG1Mobile from '../images/homePage/slider-mobile.jpg';

export default function IndexPage () {
  return (
    <main className="pageTheme">
      <meta charSet="utf-8" />
      <link rel="icon" href="./ic_launcher.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <FixedHeader />
      <HomeComp images={[
          { desktop: sliderIMG1, mobile: sliderIMG1Mobile }
        ]} 
      />
    </main>
  );
};

