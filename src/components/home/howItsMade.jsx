import React from "react";
import youtube from "../../images/youtube.png";
import youtubePic from "../../images/youtube-pt.png";
import youtubeText from "../../images/youtube-text.png";

function HowItsMade() {
  return (
    <div className="howContainer py-10">
      <div className="w-full">
        <span className="title-text">HOW IT'S MADE&nbsp;&nbsp;</span>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-6 lg:gap-12">
        <div className="left">
          <img
            src={youtube}
            alt="youtube"
            className="w-full max-w-xs lg:max-w-2xl"
          />
        </div>
        <div className="right flex flex-col items-center lg:items-start">
          <img
            src={youtubePic}
            alt="youtube"
            className="w-full max-w-xs lg:max-w-5xl mb-4 lg:mb-0"
          />
          <img
            src={youtubeText}
            alt="youtube"
            className="w-full max-w-xs lg:max-w-5xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HowItsMade;
