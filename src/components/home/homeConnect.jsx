import React from "react";
import connect from "../../images/connect.png";

const HomeConnect = () => {
  return (
    <div className="bg-[#009db4] relative h-[55vh] md:h-[70vh] flex items-center justify-start overflow-hidden connectUs">
      <div className="relative flex flex-col items-center text-center px-44 md:px-8 lg:px-96">
        <img src={connect} alt="Connect" className="w-[300px] md:w-[400px] lg:w-[500px] mb-6 md:mb-8" />
        
        <div className="social-buttons flex space-x-4 mt-4 md:mt-6">
          <a href="#" className="social-icon fa fa-facebook"></a>
          <a href="#" className="social-icon fa fa-youtube-play"></a>
          <a href="#" className="social-icon fa fa-instagram"></a>
          <a href="#" className="social-icon fa fa-twitter"></a>
        </div>
        
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 md:mt-8">
          <li className="text-white text-xl md:text-2xl lg:text-2xl font-medium">Contact us</li>
          <li className="text-white text-xl md:text-2xl lg:text-2xl font-medium">FAQ</li>
          <li className="text-white text-xl md:text-2xl lg:text-2xl font-medium">Terms & Conditions</li>
          <li className="text-white text-xl md:text-2xl lg:text-2xl font-medium">Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeConnect;
