import React from "react";
import { useLocation } from "@reach/router";
import Layout from "../components/Layout";

import backgroundImg from "../../src/images/about-bg.png";

import masala from "../images/corn-puff-masala-nutrition-facts.png";
import chesse from "../images/corn-puff-chesse-nutrition-facts.png";
import mint from "../images/corn-puff-mint-nutrition-facts.png";

const ProductDetail = () => {
  const location = useLocation();
  const { productImgBg, productImg, productName } = location.state || {};

  const nutritionImages = {
    "MOBITE CORN PUFF MASALA MANIA": masala,
    "MOBITE CORN PUFF SWISS CHEESE": chesse,
    "MOBITE CORN PUFF MIGHTY MINT": mint,
  };

  const nutritionTitle = {
    "MOBITE CORN PUFF MASALA MANIA": "Masala Mania",
    "MOBITE CORN PUFF SWISS CHEESE": "Swiss Cheese",
    "MOBITE CORN PUFF MIGHTY MINT": "Mighty Mint",
  };

  const nutrition = nutritionImages[productName];
  const subTitle = nutritionTitle[productName];

  const handleBuyNowClick = () => {
    window.open("https://mobite.dotpe.in/store/1/delivery#6096061", "_blank");
  };

  return (
    <Layout>
      <div
        className="min-h-screen"
        style={{
          background: `linear-gradient(to right, rgba(255, 223, 0, 0.6), rgba(255, 255, 102, 0.6)), url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          {/* Flex container for equal height columns */}
          <div className="flex flex-col lg:flex-row max-w-7xl mx-auto h-full">
            {/* Left Side - Product Image */}
            <div className="w-full lg:w-1/2 flex-1">
              <div className="relative w-full h-full rounded-l-3xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-lg"
                  style={{
                    backgroundImage: productImgBg
                      ? `url(${productImgBg})`
                      : "none",
                  }}
                >
                  <div className="absolute inset-0" />
                  {productImg && (
                    <div className="absolute inset-0 flex items-center justify-center p-16">
                      <img
                        src={productImg}
                        alt={productName}
                        className="max-w-[80%] max-h-[80%] object-cover hover:animate-wobbleHorBottom"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="w-full lg:w-1/2 flex-1">
              <div className="bg-white rounded-r-3xl shadow-lg p-6 sm:p-8 h-full flex flex-col">
                {/* Product Title */}
                <div className="mb-6">
                  <h1 className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold p-4 bg-[#82dfed] border-b-8 border-[#416169]">
                    {productName}
                  </h1>
                </div>

                {/* Description */}
                <div className="flex-grow">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
                    Description
                  </h4>
                  <p className="text-sm sm:text-base md:text-base text-gray-700 mb-6 text-justify leading-relaxed">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whole thing started from
                    organically grown corn. We collect, bake, add {subTitle},
                    and seasoning masala. Finally, "Mobite" corn puff is ready
                    to taste crispy & flavorful.
                  </p>

                  {/* Nutrition Image */}
                  <div className="my-6 flex justify-center">
                    <img
                      src={nutrition}
                      alt={`Nutrition Facts for ${productName}`}
                      className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] object-contain"
                    />
                  </div>
                </div>

                {/* Buy Now Button */}
                <div className="mt-6">
                  <button
                    onClick={handleBuyNowClick}
                    className="w-full sm:w-auto px-8 py-3 text-base sm:text-lg md:text-xl 
                          bg-transparent text-[#009db4] font-medium 
                          border-2 border-[#009db4] rounded-full 
                          hover:bg-[#009db4] hover:text-white 
                          transition-all duration-300 
                          flex items-center justify-center mx-auto"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
