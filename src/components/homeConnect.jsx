import React from "react";
import connect from "../images/connect.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

import leftSideImg from "../images/homePage/petter-bg1.png";
import rightSideImg from "../images/homePage/petter-bg2.png";

const HomeConnect = () => {
  return (
    <div className="bg-secondary relative h-[40vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-start overflow-hidden">
      <div className="relative flex flex-col items-center text-center my-4 px-4 sm:px-6 md:px-12 lg:px-44 xl:px-64">
        <img
          src={connect}
          alt="Connect"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px] mb-2 sm:mb-4 md:mb-6"
        />

        <div className="social-buttons flex justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 mt-4 md:mt-6">
          <a href="https://www.facebook.com/people/Mobiteindia/61565652641786/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="social-img w-[30px] sm:w-[35px] md:w-[40px] lg:w-[45px]" />
          </a>
          <a href="https://www.instagram.com/mobiteindia/" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="social-img w-[30px] sm:w-[35px] md:w-[40px] lg:w-[45px]" />
          </a>
          <a href="https://www.instagram.com/mobiteindia/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="social-img w-[30px] sm:w-[35px] md:w-[40px] lg:w-[45px]" />
          </a>
          <a href="https://www.x.com/mobiteindia/" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="social-img w-[30px] sm:w-[35px] md:w-[40px] lg:w-[45px]" />
          </a>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 md:mb-9 lg:gap-8 mt-8 md:mt-12 lg:mt-16">
          <li className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium">Contact us</li>
          <li className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium">FAQ</li>
          <li className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium">Terms & Conditions</li>
          <li className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium">Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};


export default HomeConnect;
