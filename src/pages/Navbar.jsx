import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
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
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-full mx-auto px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="h-20 w-[200px] flex items-center justify-start overflow-hidden">
          <NavLink to="/">
            <img
              src={Logo}
              alt="Kaizen IT Solutions"
              className="h-20 w-auto object-contain translate-y-2 md:h-24 lg:h-24"
            />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-black border-b-2 border-transparent"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-black border-b-2 border-transparent"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/itsolutions"
              className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-black border-b-2 border-transparent"
                }`
              }
            >
              IT Solutions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/itservices"
              className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-black border-b-2 border-transparent"
                }`
              }
            >
              IT Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-black border-b-2 border-transparent"
                }`
              }
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/itsupport"
              className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-black border-b-2 border-transparent"
                }`
              }
            >
              IT Support
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium text-sm lg:text-base hover:text-red-200 transition-colors ${
                  isActive
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-black border-b-2 border-transparent"
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md animate-slideDown">
          <ul className="flex flex-col space-y-4 p-4 text-sm">
            <li>
              <NavLink
                to="/"
                className="text-red-600 border-b-2 border-red-600 pb-1"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-red-600">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/itsolutions" className="hover:text-red-600">
                IT Solution
              </NavLink>
            </li>
            <li>
              <NavLink to="/itservices" className="hover:text-red-600">
                IT Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="hover:text-red-600">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/itsupport" className="hover:text-red-600">
                IT Support
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="hover:text-red-600">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
