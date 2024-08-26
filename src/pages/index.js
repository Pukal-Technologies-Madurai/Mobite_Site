import * as React from "react";
import FixedHeader from "../components/header/fixedHeader";
import HomeComp from "../components/home";
import '../styles/style.css';
import '../styles/global.css';
import sliderIMG1 from '../images/homePage/slider-design12.jpg';

const IndexPage = () => {
  return (
    <main className="pageTheme">
      <meta charSet="utf-8" />
      <link rel="icon" href="./ic_launcher.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <FixedHeader />
      <HomeComp images={[sliderIMG1, sliderIMG1]} />
    </main>
  );
};

export default IndexPage;
