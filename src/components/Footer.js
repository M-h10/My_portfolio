import React from 'react'
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const Footer = () => {
  
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">
                © {currentYear} R.A MOHAMMED HARIS. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href= 'https://github.com/dashboard'
                target='blank'
                className="hover:text-gray-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href='#'
                className="hover:text-gray-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href= 'mailto:harismohammed1014@gmail.com'
                className="hover:text-gray-400 transition-colors"
                aria-label="Email"
              >
                <BiLogoGmail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );

}
export default Footer