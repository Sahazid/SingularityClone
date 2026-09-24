import React, { useState } from "react";
import Logo from "../../assets/SingularityLogo.png";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-full cursor-pointer transition-all duration-200 block text-center lg:text-left ${
      isActive
        ? "bg-black text-white font-medium"
        : "text-gray-800 hover:bg-black hover:text-white"
    }`;

  const closeMobileMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <div className="fixed top-0 w-full bg-[#F7FBFF] z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Brand Logo */}
        <NavLink to="/" className="cursor-pointer" onClick={closeMobileMenu}>
          <img className="w-[7rem]" src={Logo} alt="SingularityLogo" />
        </NavLink>

        {/* Desktop Navigation Menu (Visible on Desktop) */}
        <ul className="hidden lg:flex items-center gap-6 font-normal text-sm tracking-wide">
          <li>
            <NavLink to="/" end className={navLinkStyles}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className={navLinkStyles}>
              ABOUT
            </NavLink>
          </li>

          {/* Desktop Hover Dropdown */}
          <div className="relative group">
            <li className="px-4 py-2 rounded-full text-gray-800 hover:bg-black hover:text-white cursor-pointer flex items-center gap-1.5 transition-all duration-200">
              SERVICES
              <span className="font-bold text-xs inline-block transition-transform duration-300 group-hover:rotate-180">
                ▼
              </span>
            </li>

            <div className="absolute left-0 top-full invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 min-w-[160px]">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                <NavLink
                  to="/services/software"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors"
                >
                  Software
                </NavLink>
                <NavLink
                  to="/services/studio"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors"
                >
                  Studio
                </NavLink>
                <NavLink
                  to="/services/xperience"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors"
                >
                  Xperience
                </NavLink>
              </div>
            </div>
          </div>

          <li>
            <NavLink to="/careers" className={navLinkStyles}>
              CAREERS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyles}>
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* Call To Action Button (Desktop Only) */}
        <button className="hidden lg:block lg:ml-0 md:block md:ml-96 px-5 py-2 border-2 border-black font-medium text-sm rounded-sm cursor-pointer hover:bg-black hover:text-white transition-colors duration-200">
          START A PROJECT
        </button>

        {/* Hamburger Toggle Mobile & Tablet */}
        <div className="lg:hidden z-50">
          <Hamburger
            toggled={isOpen}
            toggle={(toggled) => {
              setOpen(toggled);
              if (!toggled) setServicesOpen(false);
            }}
            size={20}
            distance="lg"
          />
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 lg:hidden transition-all duration-300 ease-in-out transform origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-95 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-3 p-6 font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={navLinkStyles}
              onClick={closeMobileMenu}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={navLinkStyles}
              onClick={closeMobileMenu}
            >
              ABOUT
            </NavLink>
          </li>

          {/* Services Dropdown in Hamburger Menu */}
          <li>
            <button
              onClick={() => setServicesOpen(!isServicesOpen)}
              className="w-full py-2 rounded-full text-gray-800 hover:bg-black hover:text-white cursor-pointer items-center transition-all duration-200"
            >
              <span>SERVICES</span>
              <span
                className={`font-bold pl-2 text-xs transform transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {/* Expandable Sub-Menu */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isServicesOpen
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-1 pl-4 bg-gray-50 rounded-2xl py-2 border border-gray-100">
                <NavLink
                  to="/services/software"
                  className={navLinkStyles}
                  onClick={closeMobileMenu}
                >
                  Software
                </NavLink>
                <NavLink
                  to="/services/studio"
                  className={navLinkStyles}
                  onClick={closeMobileMenu}
                >
                  Studio
                </NavLink>
                <NavLink
                  to="/services/xperience"
                  className={navLinkStyles}
                  onClick={closeMobileMenu}
                >
                  Xperience
                </NavLink>
              </div>
            </div>
          </li>

          <li>
            <NavLink
              to="/careers"
              className={navLinkStyles}
              onClick={closeMobileMenu}
            >
              CAREERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={navLinkStyles}
              onClick={closeMobileMenu}
            >
              CONTACT
            </NavLink>
          </li>
          <li className="pt-4 border-t border-gray-100">
            <button className="w-full text-center px-4 py-2.5 border-2 border-black rounded-sm font-medium hover:bg-black hover:text-white transition-colors">
              START A PROJECT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
