import React from "react";
import AboutUsHome from "./aboutUs";
import HomeImageSlider from "./imageSlider";
import HomeProductComp from "./products";

const HomeComp = ({ images }) => {
    return (
        <>
            <AboutUsHome />
            <HomeImageSlider images={images} />
            <HomeProductComp />
        </>
    )
}

export default HomeComp;