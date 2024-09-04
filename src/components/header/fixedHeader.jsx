import React, { useState, useEffect } from 'react';
import AppLogo from '../../images/homePage/logo-png-img.png';
import search from '../../images/homePage/s-icon.png';
import login from '../../images/homePage/login-icon.png';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { ShoppingCartOutlined, Menu, Search } from '@mui/icons-material';
import { useLocation, navigate } from "@reach/router";
import useMediaQuery from '@mui/material/useMediaQuery';  // Import useMediaQuery
import { Link } from 'gatsby';

const FixedHeader = () => {
    const location = useLocation(); // Get current URL path
    const [navButtons, setNavButtons] = useState([
        { name: 'Home', link: '/', isActive: false },
        { name: 'About Us', link: '/aboutUs', isActive: false },
        { name: 'Products', link: '/products', isActive: false },
        { name: 'How it\'s Made', link: '#', isActive: false },
        { name: 'Contact Us', link: '/contact', isActive: false },
    ]);

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the menu visibility

    // Media query to check if the screen is mobile/tablet size
    const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');

    useEffect(() => {
        const path = location.pathname;
        setNavButtons(prev =>
            prev.map(btn =>
                btn.link === path
                    ? { ...btn, isActive: true }
                    : { ...btn, isActive: false }
            )
        );
    }, [location.pathname]);

    const toggleMenu = () => {
        if (isMobileOrTablet) {
            setIsMenuOpen(!isMenuOpen); // Toggle the menu open state only for mobile/tablet
        }
    };

    const handleNavigate = (link) => {
        console.log(link)
        // navigate(link);
        // if (isMobileOrTablet) {
        //     toggleMenu(); // Close the menu after navigation only for mobile/tablet
        // }
    };

    return (
        <div style={{ width: '100%', position: 'fixed', top: 0, zIndex: '10000000' }}>
            <div style={{ backgroundColor: '#7dc501' }} className='px-6 py-2 shadow-lg'>
                <div className='p-3 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <a href="/"> 
                            <img src={AppLogo} alt="App Logo" width={130} />
                        </a>
                    </div>

                    {/* Navigation Buttons for Desktop View */}
                    <div className='grow px-2 float-start pl-44 hidden lg:flex'>
                        {navButtons.map((o, i) => (
                            <button
                                key={i}
                                className={`px-3 py-1 border-none rounded-md font-semibold hover:text-white mx-2
                                    ${o.isActive ? 'text-zinc-700 bg-white' : 'text-zinc-700'}`}
                                style={{ fontSize: 'clamp(8px, 3vw + 2rem, 16px)' }}
                                onClick={() => handleNavigate(o.link)}
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
                            <img src={search} alt="Search Icon" style={{ height: '15px', width: '20px' }} className="mr-3" />
                        </div>

                        <span className='block lg:hidden'>
                            <IconButton size='small' className='me-2'>
                                <Search className='text-white' sx={{ fontSize: '24px' }} />
                            </IconButton>
                        </span>

                        <IconButton size='medium' className='me-2'>
                            <ShoppingCartOutlined className='text-white' sx={{ fontSize: '24px' }} />
                        </IconButton>

                        <IconButton size='medium' className='me-2'>
                            <img src={login} alt="" style={{ height: '20px', width: '20px' }} />
                        </IconButton>

                        {/* Menu Button for Mobile/Tablet View */}
                        <span className='block lg:hidden'>
                            <IconButton size='medium' onClick={toggleMenu}>
                                <Menu className='text-white' sx={{ fontSize: '24px' }} />
                            </IconButton>
                        </span>
                    </div>
                </div>

                {/* Drawer Menu for Mobile/Tablet View */}
                {isMobileOrTablet && (
                    <Drawer
                        anchor='right'
                        open={isMenuOpen}
                        onClose={toggleMenu}
                    >
                        <List>
                            {navButtons.map((o, i) => (
                                <ListItem button key={i} onClick={() => handleNavigate(o.link)}>
                                    <ListItemText primary={o.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                )}
            </div>
        </div>
    );
}

export default FixedHeader;
