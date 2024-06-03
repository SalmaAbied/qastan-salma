import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/puffinWhiteLarge.png";
import patroon from "../img/patroon.png";
import { NavigationMenuDemo } from "./shadcn/navDropdown";

const Nav: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const shouldApplyRoundedClass = isScrolled || location.pathname !== "/";

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative sticky top-0 z-50">
      <div className="absolute top-0 right-10 z-40 pr-10">
        <Link to="/Support" className="bg-darkorange font-semibold text-white px-4 py-2 rounded-b-lg text-sm hover:bg-lightblue transition duration-300">
          Support
        </Link>
      </div>
      <nav className={`bg-darkblue ${shouldApplyRoundedClass ? "rounded-b-lg drop-shadow-lg drop-shadow-gray-500/50" : ""} text-white px-4 pt-4 pb-4 flex justify-between items-center md:px-20`}>
        <div className="space-x-4">
          <Link to="/" onClick={handleLinkClick}>
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
          <div className="md:hidden absolute left-0 top-0 w-80 h-80 bg-cover bg-center z-0" style={{ backgroundImage: `url(${patroon})`, backgroundPosition: "top left", backgroundSize: "contain", backgroundRepeat: "no-repeat", zIndex: 1, opacity: 50 }}></div>
          <div className="md:hidden absolute left-10 bottom-10 w-12 h-12 bg-cover bg-center z-0" style={{ backgroundImage: `url(${logo})` }}></div>

          <ul className="flex flex-col space-y-6 mt-20 items-center px-4 md:flex-row md:space-y-0 z-10 md:space-x-4 md:mt-0 md:px-0">
            <li>
              <Link to="/" className={`md:hidden lg:ml-6 font-medium text-lg ${location.pathname === "/" ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`} onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <div className="">
                <NavigationMenuDemo />
              </div>
            </li>
            <li>
              <Link to="/Toepassingen" className={`lg:ml-6 font-medium text-lg ${location.pathname.includes("/Toepassingen") ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`} onClick={handleLinkClick}>
                Toepassingen
              </Link>
            </li>
            <li>
              <Link to="/Over" className={`lg:ml-6 font-medium text-lg ${location.pathname === "/Over" ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`} onClick={handleLinkClick}>
                Over ons
              </Link>
            </li>
            <li>
              <Link to="/Contact" className={`lg:ml-6 font-medium text-lg ${location.pathname === "/Contact" ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`} onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/Blog" className={`lg:ml-6 font-medium text-lg ${location.pathname.includes("/Blog") ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`} onClick={handleLinkClick}>
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
