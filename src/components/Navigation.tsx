import { useState } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 z-11 flex w-full justify-center border-b border-b-[#504F4F] bg-[#1E1E1E]/40 p-5 backdrop-blur-md"
    >
      <nav className="flex w-full max-w-7xl flex-col items-center justify-between">
        <div className="flex w-full items-center justify-between">
          {/* logo */}
          <div>
            <img src="/images/icon-fixed.svg" alt="logo" />
          </div>

          {/* Desktop links */}
          <div className="hidden text-[#D9D9D9] md:block">
            <ul className="flex space-x-10 font-sans">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#featured">Featured</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Hamburger icon for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-5 ml-5 w-full py-4 md:hidden">
            <ul className="flex flex-col items-start space-y-4 font-sans text-[#D9D9D9]">
              <li>
                <a href="#hero" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={toggleMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#featured" onClick={toggleMenu}>
                  Featured
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={toggleMenu}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </motion.div>
  );
};

export default Navigation;
