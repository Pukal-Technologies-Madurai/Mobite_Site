import React from "react";
import AboutUsHome from "./aboutUs";
import HomeImageSlider from "./imageSlider";
import HomeProductComp from "./products";
import Homefooter from "./homefooter";
import HomeConnect from "./homeConnect";
import HowItsMade from "./howItsMade";

const HomeComp = ({ images }) => {
    return (
        <>
            <AboutUsHome />
            <HomeImageSlider images={images} />
            <HomeProductComp />
            <HowItsMade />
            <HomeConnect />
            <Homefooter />
        </>
    )
}

export default HomeComp;