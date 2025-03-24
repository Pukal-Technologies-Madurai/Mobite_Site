import React from "react";
import youtubeThumbnail from "../../images/youtube-thumbnail.png";
import comboProducts from "../../images/combo-products.png";
import youtubeText from "../../images/youtube-text.png";

import backgroundImg from "../../images/homePage/youtube-background.png";

const HowItsMade = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10"
      style={{
        background: `linear-gradient(to right, #c00002, #f1c516), url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="h-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex justify-start -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10 xl:-ml-12">
          <h2
            className="bg-white inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
              font-bold text-[#D32F2F] px-2 sm:px-4 md:px-6 lg:px-8 py-[1.5px] sm:py-[2.5px] md:py-[3.5px] lg:py-[4.5px] 
              rounded-br-[1.5rem] rounded-tr-[0.25rem]"
          >
            VIDEOS
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mt-12 h-full">
          {/* Left Side - YouTube Thumbnail */}
          <div className="w-full lg:w-[45%] flex justify-center ">
            <div className="relative group cursor-pointer overflow-hidden">
              <img
                src={youtubeThumbnail}
                alt="How It's Made Video Thumbnail"
                className="w-full max-w-[25rem] sm:max-w-[27rem] md:max-w-[30rem] lg:max-w-[50rem] xl:max-w-[55rem] 
                  h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - Product Images and Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
            <div className="overflow-hidden cursor-pointer w-full">
              <img
                src={comboProducts}
                alt="Product Combination"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden cursor-pointer w-full">
              <img
                src={youtubeText}
                alt="YouTube Text"
                className="w-full h-auto object-contain transition-transform duration-300 ease-in hover:scale-75"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItsMade;