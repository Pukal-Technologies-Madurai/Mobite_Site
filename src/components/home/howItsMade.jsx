import React from "react";
import youtube from "../../images/youtube.png";
import youtubePic from "../../images/youtube-pt.png";
import youtubeText from "../../images/youtube-text.png";

function HowItsMade() {
  return (
    <div className="howContainer py-10">
      <div className="w-full pt-5 -ml-10" >
        <span className="howTitle">
          &nbsp;VIDEOS&nbsp;
        </span>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-6 lg:gap-12 ">
        <div className="left -mt-20">
          <img
            src={youtube}
            alt="youtube"
            className="w-full max-w-xs sm:max-w-xl md:max-w-xl md:mb-40 lg:max-w-3xl"
          />
        </div>
        <div className="right flex flex-col items-center lg:items-start -mt-24 md:-mt-36 ">
          <img
            src={youtubePic}
            alt="youtube"
            className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-5xl mb-2 lg:mb-0 scale-in-bl"
            // tracking-in-expand-fwd-top
          />
          <img
            src={youtubeText}
            alt="youtube"
            className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-5xl text-pop-up-top mb-8"
          />
        </div>
      </div>
    </div>
  );
}

export default HowItsMade;
