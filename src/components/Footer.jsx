import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import cloud from '../assets/cloud.png';
import logo from '../assets/valmikilogo.png';

const Footer = () => {
  return (
    <footer className="relative bg-[#0F75BD] text-white pt-12 pb-8 px-6 md:px-16">
      {/* Cloud Backgrounds */}
      <img src={cloud} alt="cloud" className="absolute top-8 left-6 w-20 opacity-80" />
      <img src={cloud} alt="cloud" className="absolute top-6 right-6 w-20 opacity-80" />

      <div className="flex flex-col md:flex-row md:justify-between gap-10 relative z-10">
        {/* Logo and Social */}
        <div className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="logo"
            className="w-32 mb-4 transition-transform duration-300 hover:scale-105 hover:drop-shadow-md"
          />
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
          </p>
          <div className="flex gap-4 text-lg">
            <a
              href="#"
              className="text-white hover:text-[#1877F2] transition duration-300 transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#1DA1F2] transition duration-300 transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#E1306C] transition duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            
            <a
              href="#"
              className="text-white hover:text-[#DB4437] transition duration-300 transform hover:scale-110"
            >
              <FaGoogle />
            </a>
          </div>
        </div>

        {/* VSS Links */}
        <div className="md:w-1/5">
          <h4 className="font-semibold mb-4">VSS</h4>
          <ul className="space-y-2 text-sm">
            {['About Us', 'Services', 'Community', 'Testimonial'].map((item, idx) => (
              <li key={idx} className="hover:underline transition duration-200 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div className="md:w-1/5">
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            {['Help Center', 'Tweet @ Us', 'Webians', 'Feedback'].map((item, idx) => (
              <li key={idx} className="hover:underline transition duration-200 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Links */}
        <div className="md:w-1/5">
          <h4 className="font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            {['Courses', 'Become Teacher', 'Service', 'All in One'].map((item, idx) => (
              <li key={idx} className="hover:underline transition duration-200 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:w-1/5">
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <div className="flex items-center gap-3 text-sm mb-2">
            <FaPhoneAlt />
            <span>(91) 98765 4321 54</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MdEmail />
            <span>support@mail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-4 border-t border-white/30 text-sm flex flex-col md:flex-row justify-between items-center gap-3">
        <p>© Copyright by Cleaning. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Use', 'Legal', 'Site Map'].map((item, idx) => (
            <span key={idx} className="hover:underline transition duration-200 cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
