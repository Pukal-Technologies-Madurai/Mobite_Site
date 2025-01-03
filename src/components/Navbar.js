import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import logo from "../images/homePage/logo.png";
import { Link } from "gatsby";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const pageLinks = {
    Home: "",
    "About Us": "aboutUs",
    Products: "products",
    "Contact Us": "contact",
  };

  return (
    <nav
      className={`bg-primary text-white shadow-lg ${
        isScrolled ? "fixed top-0 left-0 w-full z-50" : ""
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="w-32 h-11" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {Object.keys(pageLinks).map((item) => (
              <Link
                key={item}
                to={`/${pageLinks[item]}`}
                className="text-sm font-medium hover:text-gray-300 transition-colors duration-200 ease-in-out"
                activeClassName="border-b-2 border-white"
              >
                {item}
              </Link>
            ))}
            <Link
              to="https://pukalfoods.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 ease-in-out"
            >
              <ShoppingCart size={18} />
              Buy Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Object.keys(pageLinks).map((item) => (
            <Link
              key={item}
              to={`/${pageLinks[item]}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors"
              activeClassName="bg-gray-900"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          <Link
            to="https://pukalfoods.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium bg-white text-primary hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            <ShoppingCart size={18} />
            Buy Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
