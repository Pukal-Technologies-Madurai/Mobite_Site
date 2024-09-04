import React from "react";

const AboutUsHome = ({text}) => {
  return (
    <div className="aboutUS-container">
      <div className="aboutUS">
        <h6
          className="text-green-800 resFont text-justify"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};

export default AboutUsHome;
