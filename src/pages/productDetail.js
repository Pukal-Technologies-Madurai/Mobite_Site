import React, { useState } from "react";
import { useLocation } from "@reach/router";
import FixedHeader from "../components/header/fixedHeader";
import Homefooter from "../components/home/homefooter";
import HomeConnect from "../components/home/homeConnect";
import nutrition from "../images/fat-img.png";

const ProductDetail = () => {
  const location = useLocation();
  const { productImgBg, productImg, productName } = location.state || {};
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBuyNowClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <FixedHeader />
      <div className="flex flex-col lg:flex-row justify-center items-stretch mx-auto max-w-screen-xl p-4 lg:p-8 mt-32 lg:mt-32">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div
            className="relative w-full h-[60vh] lg:h-[80vh] bg-gray-100 shadow-lg flex justify-center items-center"
            style={{
              backgroundImage: productImgBg ? `url(${productImgBg})` : "none",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {productImg && (
              <img
                src={productImg}
                alt={productName}
                className="max-w-[90%] max-h-[90%] object-contain"
              />
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white p-6 lg:p-8 w-full lg:w-1/2 shadow-lg flex flex-col justify-between">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 p-4 bg-[#82dfed] border-b-8 border-[#416169]">
              {productName}
            </h1>
            <h4 className="text-xl lg:text-2xl font-bold mb-2">Description</h4>
            <p className="text-base lg:text-xl text-gray-700 mb-8 text-justify leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whole thing started from organically grown corn. We collect, bake, add Swiss cheese, and seasoning masala. Finally, “Mobite” corn puff is ready to taste crispy & flavorful.
            </p>
          </div>

          <img
            src={nutrition}
            alt="Nutrition Facts"
            className="w-[40%] h-auto object-contain mx-auto"
          />

          <div className="flex justify-center mt-8">
            <button
              className="bg-transparent text-[#009db4] text-lg lg:text-2xl font-medium border border-[#009db4] py-2 px-6 rounded-full hover:bg-[#009db4] hover:text-white transition-colors"
              onClick={handleBuyNowClick}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] lg:w-[50%] relative">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-center">
              Our Authorized Retailers
            </h2>
            <p className="text-lg lg:text-2xl text-center text-gray-700 mb-4">
              Visit our website to find the nearest retailer.
            </p>
            <a
              href="http://localhost:5173?brand=mobite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#009db4] text-lg lg:text-2xl font-semibold underline text-center block mb-4"
            >
              shrifoodsindia
            </a>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}

      <HomeConnect />
      <Homefooter />
    </div>
  );
};

export default ProductDetail;
