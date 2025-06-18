import React, { useEffect, useState } from "react";
import { ShoppingCart, Zap } from "lucide-react";
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
                className="relative text-sm font-medium group px-2 py-1"
                activeClassName="after:w-full after:bg-white"
              >
                {item}
                {/* Animated underline effect */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out 
                  group-hover:w-full"
                ></span>
                {/* Subtle top border on hover */}
                <span
                  className="absolute top-0 left-0 w-0 h-0.5 bg-white/30 transition-all duration-300 ease-out 
                  group-hover:w-full"
                ></span>
              </Link>
            ))}

            <Link
              to="https://my-estore.com/mobite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full border-2 
                border-white font-medium transition-all duration-300 ease-in-out
                hover:bg-primary/80 hover:shadow-lg hover:shadow-white/20
                transform hover:-translate-y-0.5"
            >
              <ShoppingCart size={18} />
              Bulk Order
            </Link>

            <Link
              to="https://mobite.dotpe.in/store/1/delivery#6096061"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-full font-medium
                transition-all duration-300 ease-in-out
                hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20
                transform hover:-translate-y-0.5"
            >
              <Zap size={18} />
              Buy Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white
                transition-all duration-200 ease-in-out
                hover:text-gray-300 hover:bg-white/10
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          isOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Object.keys(pageLinks).map((item) => (
            <Link
              key={item}
              to={`/${pageLinks[item]}`}
              className="block px-3 py-2 rounded-md text-base font-medium
                transition-all duration-200 ease-in-out
                hover:bg-white/10 hover:pl-6"
              activeClassName="bg-white/20"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          <Link
            to="https://mobite.dotpe.in/store/1/delivery"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium
              bg-white text-primary 
              transition-all duration-200 ease-in-out
              hover:bg-gray-100 hover:shadow-lg"
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
