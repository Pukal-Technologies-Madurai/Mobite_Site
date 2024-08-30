import React, { useState } from 'react'
import AppLogo from '../../images/homePage/logo-png-img.png';
import search from '../../images/homePage/s-icon.png';
import login from '../../images/homePage/login-icon.png';
// import cart from '../../images/homePage/cart-icon.png';
import { IconButton } from '@mui/material';
import { ShoppingCartOutlined, Menu, Search } from '@mui/icons-material';
import { navigate } from 'gatsby';

const FixedHeader = () => {
    const [navButtons, setNavButtons] = useState([
        {
            name: 'Home',
            link: '/',
            isActive: true,
        },
        {
            name: 'About Us',
            link: '/aboutUs',
            isActive: false,
        },
        {
            name: 'Products',
            link: '/products',
            isActive: false,
        },
        {
            name: 'How it\'s Made',
            link: '#',
            isActive: false,
        },
        {
            name: 'Contact Us',
            link: '#',
            isActive: false,
        },
    ])

    return (
        <div style={{ width: '100%', position: 'fixed', top: 0, zIndex: '10000000' }}>
            <div style={{ backgroundColor: '#7dc501' }} className='px-6 py-2 shadow-lg'>
                <div className='p-3 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={AppLogo} alt="App_Logo" width={130} />
                    </div>

                    {/* Navigation Buttons */}
                    <div className='grow px-2 justify-center items-center hidden lg:flex'>
                        {navButtons.map((o, i) => (
                            <button
                                key={i}
                                className={`
                              px-3 py-1 border-none rounded-md font-semibold hover:text-lime-300 mx-2
                              ${!o.isActive ? ' text-zinc-700 ' : ' text-lime-700 bg-white '}
                            `}
                                style={{ fontSize: 'clamp(8px, 3vw + 2rem, 16px)' }}
                                onClick={() => {
                                    setNavButtons(prev =>
                                        prev.map(btn =>
                                            btn.name === o.name
                                                ? { ...btn, isActive: true }
                                                : { ...btn, isActive: false }
                                        )
                                    );
                                    navigate(o.link);
                                }}
                            >
                                {o.name}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className='flex items-center'>

                        <div className='rounded-3xl bg-white overflow-hidden lg:flex hidden items-center me-2'>

                            <input
                                type="search"
                                className='border-none outline-none px-3 py-2 flex-grow w-auto'
                                placeholder="Search..."
                            />
                            <img src={search} alt="Search Icon" style={{ height: '20px', width: '20px' }} className="mr-3" />
                        </div>

                        <span className='block lg:hidden'>
                            <IconButton size='small' className='me-2'>
                                <Search className=' text-white' sx={{ fontSize: '24px' }} />
                            </IconButton>
                        </span>

                        <IconButton size='medium' className='me-2' >
                            <ShoppingCartOutlined className=' text-white' sx={{ fontSize: '24px' }}/>
                        </IconButton>

                        <IconButton size='medium' className='me-2'>
                            <img src={login} alt="" style={{ height: '20px', width: '20px' }} />
                        </IconButton>

                        <span className='block lg:hidden'>
                            <IconButton size='medium' className=''>
                                <Menu className='text-white text-lg' sx={{ fontSize: '24px' }} />
                            </IconButton>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FixedHeader