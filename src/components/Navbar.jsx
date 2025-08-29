import React from "react";
import { Link } from "react-router-dom";
import valmikilogo from "../assets/valmikilogo.png";

const Navbar = () => {
  return (
    <header className="relative bg-white shadow-md">
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-10 relative z-10">
        {/* Left Nav */}
        <nav className="flex space-x-6 text-gray-700 font-medium text-lg mr-40">
          <Link
            to="/"
            className="hover:text-blue-600 transition duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600 transition duration-300 transform hover:scale-105"
          >
            About Us
          </Link>
          <Link
            to="/achievement"
            className="hover:text-blue-600 transition duration-300 transform hover:scale-105"
          >
            Achievements
          </Link>
        </nav>

        {/* Right Nav */}
        <nav className="flex space-x-6 text-gray-700 font-medium text-lg ml-40">
          <Link
            to="/news"
            className="hover:text-blue-600 transition duration-300 transform hover:scale-105"
          >
            News & Events
          </Link>
          <Link
            to="/gallery"
            className="hover:text-blue-600 transition duration-300 transform hover:scale-105"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20">
        <div
          className="bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden"
          style={{ width: "170px", height: "170px" }}
        >
          <img
            src={valmikilogo}
            alt="Valmiki Logo"
            className="object-contain w-[1000px] h-[1000px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
