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
        width: '90%',
        margin: 'auto',
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '15px',
        padding: '5% 2%',
        boxShadow: 'rgba(100, 100, 111, 0.6) 0px 7px 29px 0px'
    }

    return (
        <>
            <div className="relative flex justify-center items-center" style={sty}>
                <img src={productImg} alt={'product_img'} className='rounded-lg w-full h-auto p-20 lg:mb-32 md:mb-16 sm:p-10 lg:p-20 wobble-hor-bottom'/>
                {/* <h6>{title}</h6> */}
            </div>
        </>
    )
}



const HomeProductComp = () => {

    const productsList = [
        {
            name: 'MOBITE CORN PUFF MASALA MANIA',
            img: productOne,
            bg: productBgOne,
            slug: '/masala-mania',
        },
        {
            name: 'MOBITE CORN PUFF SWISS CHEESE',
            img: productTwo,
            bg: productBgTwo,
            slug: '/swiss-cheese',
        },
        {
            name: 'MOBITE CORN PUFF MIGHTY MINT',
            img: productThree,
            bg: productBgThree,
            slug: '/mighty-mint',
        }
    ]

    return (
        <div className=' bg-white'>
            <div className='productContainer py-10'>
            <div className="w-full pt-5 -ml-10" >
                <span className="howTitle">
                    &nbsp;&nbsp;PRODUCTS&nbsp;
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