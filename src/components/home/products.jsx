import React, { useEffect, useState } from 'react';
import productBgOne from '../../images/homePage/cart-img01.png';
import productBgTwo from '../../images/homePage/cart-img02.png';
import productBgThree from '../../images/homePage/cart-img03.png';
import productOne from '../../images/homePage/packet2.png';
import productTwo from '../../images/homePage/packet3.png';
import productThree from '../../images/homePage/packet1.png';
import { Link } from 'gatsby';


const CardComp = ({ bgImg, bgColor, productImg, title }) => {

    const sty = {
        width: '100%',
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '15px',
        padding: '5% 2%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }

    return (
        <>
            <div className="relative flex items-center justify-center" style={sty}>
                <img src={productImg} alt={'product_img'} className='rounded-lg w-full h-auto p-40 mb-10 wobble-hor-bottom' />
                {/* <h6>{title}</h6> */}
            </div>
        </>
    )
}



const HomeProductComp = () => {

    const productsList = [
        {
            name: 'MASALA MANIA',
            img: productOne,
            bg: productBgOne,
            slug: '/masala-mania',
        },
        {
            name: 'SWISS CHEESE',
            img: productTwo,
            bg: productBgTwo,
            slug: '/swiss-cheese',
        },
        {
            name: 'MIGHTY MINT',
            img: productThree,
            bg: productBgThree,
            slug: '/mighty-mint',
        }
    ]

    return (
        <div className=' bg-white'>
            <div className='productContainer py-10'>
            <div className="w-full pt-5 pl-0">
                <span className="howTitle">
                    PRODUCTS&nbsp;&nbsp;
                </span>
            </div>

                <div className="flex flex-wrap product-grid-img">

                    {productsList.map((o, i) => (
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={i}>
                            <CardComp bgImg={o.bg} productImg={o.img} bgColor={''} />
                            <div className="flex justify-center mt-8 lg:mt-16">
                                <Link
                                    to="/productDetail"
                                    state={{ productImgBg: o.bg, productImg: o.img, productName: o.name }} // Pass the image and other details
                                    className="more-button bg-transparent hover:bg-white m-auto text-[20px] sm:text-[25px] lg:text-[30px] px-6 sm:px-8 lg:px-10 text-white font-medium hover:text-red-500 py-2 border-2 border-white hover:border-red-800 rounded-full"
                                >More
                                </Link>
                            </div>
                        </div>
                    ))}
                    

                </div>

            </div>
        </div>
    )
}

export default HomeProductComp