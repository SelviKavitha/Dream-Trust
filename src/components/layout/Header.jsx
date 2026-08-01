import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  FaBars,
  FaTimes,
  FaHandsHelping,
} from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    //{ name: "Publications", path: "/publications" },
    { name: "Join Us", path: "/joinus" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-emerald-900 via-green-800 to-teal-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Dreams Trust"
              className="w-16 h-16 rounded-full object-cover border-2 border-white"
            />
            <div>
              <h2 className="text-2xl font-bold text-white">
                Dreams
                <span className="text-orange-400"> Trust</span>
              </h2>
              <p className="text-xs text-blue-100 tracking-wider">
                Empowering Lives
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-300 ${
                    isActive
                      ? "text-orange-400"
                      : "text-white hover:text-orange-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/donate"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FaHandsHelping />
              Donate Now
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-emerald-950/95 backdrop-blur-xl border-t border-emerald-800">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 border-b border-emerald-900 transition ${
                  isActive
                    ? "text-orange-400 bg-emerald-900"
                    : "text-white hover:bg-emerald-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/donate"
            onClick={() => setMenuOpen(false)}
            className="block m-5 bg-orange-500 hover:bg-orange-600 text-center py-3 rounded-full text-white font-semibold transition"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;