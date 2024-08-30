import React from 'react'
import FixedHeader from '../components/header/fixedHeader'
import Homefooter from '../components/home/homefooter'
import AboutUsHome from '../components/home/aboutUs'

const AboutUs = () => {
  return (
    <React.Fragment>
        <FixedHeader />
        <div className='mt-32 mb-80'>
            <AboutUsHome />
        </div>
        <Homefooter />
    </React.Fragment>
  )
}

export default AboutUs