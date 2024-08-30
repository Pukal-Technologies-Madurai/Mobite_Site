import React from 'react'
import FixedHeader from '../components/header/fixedHeader'
import Homefooter from '../components/home/homefooter'
import HomeProductComp from '../components/home/products'

const Products = () => {
  return (
    <React.Fragment>
        <FixedHeader />
        <div className='mt-32'>
            <HomeProductComp />
        </div>
        <Homefooter />
    </React.Fragment>
  )
}

export default Products