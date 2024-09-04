import React from "react";
import AboutUsHome from "./components/home/aboutUs";
import HomeImageSlider from "./components/home/imageSlider";
import HomeProductComp from "./components/home/products";
import Homefooter from "./components/home/homefooter";
import HomeConnect from "./components/home/homeConnect";
import HowItsMade from "./components/home/howItsMade";

export default function HomeComp ({ images }) {
    const text = `<br />
    Our journey began with a simple yet powerful idea: to create snacks that are not <br />only tasty but also wholesome.<br />&nbsp; `;

    return (
        <>
            <AboutUsHome text= {text}/>
            <HomeImageSlider images={images} />
            <HomeProductComp />
            <HowItsMade />
            <HomeConnect />
            <Homefooter />
        </>
    )
}
