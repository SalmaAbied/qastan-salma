import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/puffinWhiteLarge.png";

const Nav: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-10 z-10 pr-10">
        <Link to="/Support" className="bg-darkorange font-semibold text-white px-4 py-2 rounded-b-lg text-sm hover:bg-lightblue transition duration-300">
          Support
        </Link>
      </div>
      <nav className="bg-darkblue text-white px-20 pt-10 flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/Oplossingen" className="ml-12 font-medium text-lg hover:text-darkorange transition duration-300">
                Oplossingen
              </Link>
            </li>
            <li>
              <Link to="/Toepassingen" className="ml-12 font-medium text-lg hover:text-darkorange transition duration-300">
                Toepassingen
              </Link>
            </li>
            <li>
              <Link to="/Over" className="ml-12 font-medium text-lg hover:text-darkorange transition duration-300">
                Over ons
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="ml-12 font-medium text-lg hover:text-darkorange transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/Blog" className="ml-12 font-medium text-lg hover:text-darkorange transition duration-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
