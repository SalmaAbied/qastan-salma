import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/puffinWhiteLarge.png";
import patroon from "../img/patroon.png";

const Nav: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative sticky top-0 z-40">
      <div className="absolute top-0 right-10 z-40 pr-10">
        <Link to="/Support" className="bg-darkorange font-semibold text-white px-4 py-2 rounded-b-lg text-sm hover:bg-lightblue transition duration-300">
          Support
        </Link>
      </div>
      <nav className="bg-darkblue text-white px-4 pt-4 pb-4 flex justify-between items-center md:px-20">
        <div className="space-x-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`fixed top-0 left-0 w-full h-full bg-darkblue z-20 transform flex justify-center items-center md:justify-end ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:relative md:translate-x-0 md:flex md:items-center md:space-x-4`} onClick={closeMobileMenu}>
          <div className="md:hidden absolute left-0 top-0 w-56 h-80 bg-cover bg-center z-0" style={{ backgroundImage: `url(${patroon})` }}></div>
          <div className="md:hidden absolute left-10 bottom-10 w-12 h-12 bg-cover bg-center z-0" style={{ backgroundImage: `url(${logo})` }}></div>

          <ul className="flex flex-col space-y-6 mt-20 items-center px-4 md:flex-row md:space-y-0 z-10 md:space-x-4 md:mt-0 md:px-0">
            <li>
              <Link to="/" className={`md:hidden font-medium text-lg ${location.pathname === "/" ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`}>
                Home
              </Link>
            </li>{" "}
            <li>
              <Link to="/Oplossingen" className={`font-medium text-lg ${location.pathname === "/Oplossingen" ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`}>
                Oplossingen
              </Link>
            </li>
            <li>
              <Link to="/Toepassingen" className={`font-medium text-lg ${location.pathname === "/Toepassingen" ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`}>
                Toepassingen
              </Link>
            </li>
            <li>
              <Link to="/Over" className={`font-medium text-lg ${location.pathname === "/Over" ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`}>
                Over ons
              </Link>
            </li>
            <li>
              <Link to="/Contact" className={`font-medium text-lg ${location.pathname === "/Contact" ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/Blog" className={`font-medium text-lg ${location.pathname === "/Blog" ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`}>
                Blog
              </Link>
            </li>
            <li className="md:hidden">&copy; Qastan 2024</li>
          </ul>
          <button onClick={closeMobileMenu} className="absolute top-4 right-4 text-white focus:outline-none md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
