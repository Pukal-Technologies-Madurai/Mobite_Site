import React from "react";
import { useLocation } from "@reach/router";
import FixedHeader from "../components/header/fixedHeader";
import Homefooter from "../components/home/homefooter";
import HomeConnect from "../components/home/homeConnect";

const ProductDetail = () => {
  const location = useLocation();
  const { productImg, productName } = location.state || {};

  return (
    <div>
      <FixedHeader />
      <div className="flex justify-center items-center">
        <div className="mt-56 pb-12 left">
          {productImg && <img src={productImg} alt={productName} />}
        </div>
        <div className="right">
          <div className="bg-white w-[150px] h-[150px]">
            
          </div>
        </div>
      </div>
      <HomeConnect />
      <Homefooter />
    </div>
  );
};

export default ProductDetail;
