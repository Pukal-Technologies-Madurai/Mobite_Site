import React from 'react';
import productBgOne from '../../images/homePage/cart-bg-img1.png';
import productBgTwo from '../../images/homePage/cart-bg-img2.png';
import productBgThree from '../../images/homePage/cart-bg-img3.png';
import productOne from '../../images/homePage/packet1.png';
import productTwo from '../../images/homePage/packet2.png';
import productThree from '../../images/homePage/packet3.png';


const CardComp = ({ bgImg, bgColor, productImg, title }) => {

    const sty = {
        width: '100%',
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
    }

    return (
        <>
            <div className=" " style={sty}>
                <img src={productImg} alt={'product_img'} className='' />
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
        },
        {
            name: 'SWISS CHEESE',
            img: productTwo,
            bg: productBgTwo,
        },
        {
            name: 'MIGHTY MINT',
            img: productThree,
            bg: productBgThree,
        }
    ]

    return (
        <div className=' bg-white'>
            <div className='productContainer py-10'>
                <div>
                    <span className=' text-red-700 bg-white py-3 px-6 rounded-r-lg font-semibold resFont'>PRODUCTS</span>
                </div>

                <div className="flex flex-wrap">

                    {productsList.map((o, i) => (
                        <div className="w-full md:w-1/2 lg:w-1/3" key={i}>
                            <CardComp bgImg={o.bg} productImg={o.img} title={o.name} bgColor={''} />
                        </div>
                    ))}

                </div>


            </div>
        </div>
    )
}

export default HomeProductComp