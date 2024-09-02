import React from "react";
import { useLocation } from "@reach/router";
import FixedHeader from "../components/header/fixedHeader";
import Homefooter from "../components/home/homefooter";
import HomeConnect from "../components/home/homeConnect";
import actualImg from "../images/cart-img1.png";

const ProductDetail = () => {
  const location = useLocation();
  const { productImgBg, productImg, productName } = location.state || {};

  return (
    <div>
      <FixedHeader />
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch mx-auto max-w-screen-lg p-4 lg:p-8 mt-32">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div
            className="relative w-full h-[60vh] lg:h-[80vh] bg-gray-100"
            style={{
              backgroundImage: productImgBg ? `url(${productImgBg})` : "none",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {productImg && (
              <img
                src={productImg}
                alt={productName}
                className="absolute inset-0 w-full h-full object-cover p-44"
                style={{ opacity: 1 }}
              />
            )}
          </div>
        </div>
        <div className="bg-white p-6 lg:p-8 w-full lg:w-1/2 lg:h-[80vh] shadow-lg flex flex-col justify-center">
          <h1 className="text-2xl lg:text-5xl font-bold mb-4 p-4 bg-[#82dfed] border-b-8 border-[#416169]">{productName}</h1>
          <h4 className="text-xl lg:text-2xl font-semibold mb-2">
            Description
          </h4>
          <p className="text-base lg:text-lg text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur, et, unde itaque, consequatur
            dolores eaque cumque perferendis, repudiandae fugiat quidem ab.
          </p>
          <h4 className="text-xl lg:text-2xl font-semibold mb-2">
            Nutrition Facts
          </h4>
          <p className="text-base lg:text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur, et, unde itaque, consequatur
            dolores eaque cumque perferendis, repudiandae fugiat quidem ab.
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#009db4] text-white text-lg lg:text-xl font-medium py-2 px-6 rounded-full hover:bg-white hover:border-[#009db4] hover:text-[#009db4] border border-transparent">
              Add to cart
            </button>
            <button className="bg-transparent text-[#009db4] text-lg lg:text-xl font-medium border border-[#009db4] py-2 px-6 rounded-full hover:bg-[#009db4] hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <HomeConnect />
      <Homefooter />
    </div>
  );
};

export default ProductDetail;
