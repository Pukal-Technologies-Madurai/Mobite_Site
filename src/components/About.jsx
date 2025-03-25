import React from "react";

import aboutTop from "../images/about-us-top.png";
import aboutBottom from "../images/homePage/a-bg-shape-img.png";
import backgroundImg from "../images/about-bg.png";

const About = ({ text }) => {
  return (
    <section
      className="w-full flex justify-center items-center my-2 relative bg-blend-overlay"
      style={{
        background: `#e1e311 url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full py-4 sm:py-6 md:py-8 lg:py-10">
        <div className="relative w-full shadow-2xl rounded-lg flex flex-col bg-[rgba(250,251,155,0.7)]">
          {/* Top Decorative Element */}
          <div
            className="absolute top-0 left-0 right-0 w-full h-8 sm:h-10 md:h-12 lg:h-16"
            style={{
              backgroundImage: `url(${aboutTop})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
            <div className="w-full">
              <h6
                className="text-green-800 text-center w-11/12 mx-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div
            className="absolute bottom-0 left-0 right-0 w-full h-8 sm:h-10 md:h-12 lg:h-16"
            style={{
              backgroundImage: `url(${aboutBottom})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
