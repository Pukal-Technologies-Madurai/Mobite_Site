import React from "react";
import AppLogo from "../../images/homePage/logo-png-img.png";

function Homefooter() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#7dc501] py-8 px-4 sm:px-8 md:px-12 lg:px-16">
      <img
        src={AppLogo}
        alt="App Logo"
        className="w-48 sm:w-64 md:w-80 lg:w-40 mb-4"
      />
      <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-center">
        &copy; 2024 Mobite Inc. a Division of Pukal Foods
      </h4>
    </div>
  );
}

export default Homefooter;