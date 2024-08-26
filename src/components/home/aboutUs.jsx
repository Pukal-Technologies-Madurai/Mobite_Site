import React, { useState, useEffect } from 'react';
import chipsBG from '../../images/homePage/tag-bg.jpg';

const AboutUsHome = ({ }) => {

    return (
        <>
            {Array.from({ length: 4 }).map(o => (
                <br key={o} />
            ))}
            <div className='py-5'>
                <div className='aboutUS'>
                    <h6 className=' text-green-800 text-center font-semibold lg:py-8 md:py-6 sm:py-3 lg:my-8 md:my-6 sm:my-3 px resFont'>
                        Our journey began with a simple yet powerful idea: to create snacks that are not only taste but also wholesome.
                    </h6>
                </div>
            </div>
        </>
    )
}


export default AboutUsHome