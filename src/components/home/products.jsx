import React from "react";
import { Link } from "gatsby";
import masalaBg from "../../images/homePage/masala-cover.png";
import cheeseBg from "../../images/homePage/cheese-cover.png";
import mintBg from "../../images/homePage/mint-cover.png";

import masala from "../../images/homePage/masala-img.png";
import cheese from "../../images/homePage/cheese-img.png";
import mint from "../../images/homePage/mint-img.png";

import backgroundImg from "../../images/homePage/products-background.png";

const ProductCard = ({ product }) => {
    return (
        <div className="relative w-full p-2 sm:p-3 md:p-4 lg:p-5">
            <div
                className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4]"
                style={{
                    background: `url(${product.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <div className="absolute inset-0 grid place-items-center">
                    <div className="w-4/5 h-4/5 relative flex items-center justify-center -mt-9">
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain hover:animate-wobbleHorBottom"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4 sm:mt-5 md:mt-6 text-center">
                <Link
                    to="/productDetail"
                    state={{
                        productImgBg: product.bg,
                        productImg: product.img,
                        productName: product.name
                    }}
                    className="inline-block rounded-full border-2 border-white bg-transparent 
                        px-3 sm:px-5 md:px-7 
                        py-1.5 sm:py-2 md:py-2.5 
                        text-sm sm:text-base md:text-lg 
                        font-bold text-white 
                        transition-all duration-300 
                        hover:bg-white hover:text-red-600"
                >
                    More
                </Link>
            </div>
        </div>
    );
};

const HomeProductComp = () => {
    const productsList = [
        {
            name: "MOBITE CORN PUFF MASALA MANIA",
            img: masala,
            bg: masalaBg,
            slug: "/masala-mania",
        },
        {
            name: "MOBITE CORN PUFF SWISS CHEESE",
            img: cheese,
            bg: cheeseBg,
            slug: "/swiss-cheese",
        },
        {
            name: "MOBITE CORN PUFF MIGHTY MINT",
            img: mint,
            bg: mintBg,
            slug: "/mighty-mint",
        }
    ];

    return (
        <section
            className="relative overflow-hidden py-6 sm:py-8 md:py-12 lg:py-16"
            style={{
                background: `linear-gradient(to right, #fd974c, #ac070b), url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "overlay"
            }}
        >
            <div className="mx-auto px-4 sm:px-6 md:px-8">
                {/* Title */}
                <div className="flex justify-start -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10 xl:-ml-12 mb-8">
                    <h2 className="bg-white inline-block 
                        text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                        font-bold text-[#D32F2F] 
                        px-2 sm:px-4 md:px-6 lg:px-8
                        py-[1.5px] sm:py-[2.5px] md:py-[3.5px] lg:py-[4.5px] 
                        rounded-br-[1.5rem] rounded-tr-[0.25rem]">
                        PRODUCTS
                    </h2>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                    {productsList.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeProductComp