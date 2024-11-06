import React, { useState } from 'react';
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown
  };

  return (
    <nav className="relative z-20 mb-20 flex items-center justify-between py-6 px-4 bg-gray-800">
      {/* Logo on the left */}
      {/*<div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-10" />
      </div>*/}

      {/* Social media icons */}


      {/* Hamburger icon and dropdown menu */}
      <div className="relative">
        <FaHamburger
          className="text-white text-3xl cursor-pointer"
          onClick={toggleDropdown}
        />
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-50">
            <a href="#home" className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-gray-200">Home</a>
            <a href="#about" className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-gray-200">About</a>
            <a href="#technologies" className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-gray-200">Gallery</a>
            <a href="#projects" className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-gray-200">Activities</a>
            <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-gray-200">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

