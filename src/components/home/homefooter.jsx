import React from 'react'
import AppLogo from '../../images/homePage/logo-png-img.png';

function Homefooter() {
  return (
    <div className="flex flex-col justify-center items-center h-[35vh] bg-[#7dc501]">
      <img src={AppLogo} alt="App_Logo" className='w-96' />
      <h4 className='text-3xl font-semibold mt-6'>&copy; 2024 Mobite Inc. a Division of Pukal Foods</h4>
    </div>
  )
}

export default Homefooter