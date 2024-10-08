import React from 'react'
import FixedHeader from '../components/header/fixedHeader'
import Homefooter from '../components/home/homefooter'
import AboutUsHome from '../components/home/aboutUs'
import HomeConnect from '../components/home/homeConnect';

export default function AboutUs () {
  const text = `Welcome to Mobite, your go-to destination for delicious and fun baked snacks in India!
    Bringing joy to your taste buds, Whether you’re in the mood for a quick bite on the go or something to share with friends and family, 
    our snacks are the perfect choice. 
    Thank you for choosing Mobite, We look forward to being a part of your snacking moments, 
    bringing a little bit of fun and flavor to your day!<br /><br />&nbsp;
  `;
  
  return (
    <React.Fragment>
        <FixedHeader />
        {/* <AboutUsHome text={text} /> */}
        <div className="aboutContainer">
        <div className="about">
          <h6
            className="text-green-800 aboutFont"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
        <HomeConnect />
        <Homefooter />
    </React.Fragment>
  );
};
