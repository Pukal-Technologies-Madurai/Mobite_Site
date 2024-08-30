import React, { useState, useEffect } from "react";
import chipsBG from "../../images/homePage/tag-bg.jpg";

const AboutUsHome = ({}) => {
  return (
    <>
      {Array.from({ length: 4 }).map((o) => (
        <br key={o} />
      ))}
      <div className="aboutUS-container">
        <div className="aboutUS">
          <h6 className="text-green-800 resFont">
            Our journey began with a simple yet powerful idea: to create snacks
            that are not only tasty but also wholesome.
          </h6>
        </div>
      </div>
    </>
  );
};

export default AboutUsHome;
