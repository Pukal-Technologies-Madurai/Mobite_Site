import React, { useEffect, useState } from 'react';
import productBgOne from '../../images/homePage/cart-bg-img1.png';
import productBgTwo from '../../images/homePage/cart-bg-img2.png';
import productBgThree from '../../images/homePage/cart-bg-img3.png';
import productOne from '../../images/cart-img1.png';
import productTwo from '../../images/cart-img2.png';
import productThree from '../../images/cart-img3.png';
import { Link } from 'gatsby';


const CardComp = ({ bgImg, bgColor, productImg, title }) => {

    const sty = {
        width: '100%',
        // backgroundColor: bgColor,
        // backgroundImage: url(${bgImg}),
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundBlendMode: 'overlay',
    }

    return (
        <>
            <div className=" " style={sty}>
                <img src={productImg} style={{borderRadius: "15px"}}  alt={'product_img'} className='' />
                <h6>{title}</h6>
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
                <span className="text-red-700 bg-white py-3 px-6 rounded-br-[50px] rounded-tr-[25px] text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px] font-semibold">
                    PRODUCTS&nbsp;&nbsp;
                </span>
            </div>

                <div className="flex flex-wrap product-grid-img">

                    {productsList.map((o, i) => (
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={i}>
                            <CardComp bgImg={o.bg} productImg={o.img} bgColor={''} />
                            <div className="flex justify-center mt-8 lg:mt-16">
                                <Link
                                    to="../../pages/productDetail"
                                    state={{ productImg: o.img, productName: o.name }} // Pass the image and other details
                                    className="bg-transparent hover:bg-white m-auto text-[20px] sm:text-[25px] lg:text-[30px] px-6 sm:px-8 lg:px-10 text-white font-medium hover:text-red-500 py-2 border-2 border-white hover:border-red-800 rounded-full"
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