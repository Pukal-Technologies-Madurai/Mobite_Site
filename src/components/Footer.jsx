import React from "react";
import { Link } from "gatsby";
import Logo from "../images/homePage/logo.png";

const Footer = () => {
    return (
        <footer className="h-32 flex flex-col justify-center items-center bg-primary py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <Link to="/">
                <img src={Logo} alt="Logo"
                    className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 mb-4"
                />
            </Link>
            <h4 className="text-sm font-medium text-center text-white">
                &copy; {new Date().getFullYear()} Mobite is the registered trade mark of Pukal Foods pvt ltd.
            </h4>
        </footer>
    )
}

export default Footer