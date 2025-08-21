import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight font-bold text-white">eCell NSUT</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex px-5 space-x-12 font-bold">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex space-x-4">
            <a
              href="#"
              className="py-2 px-4 border border-neutral-700 text-neutral-300 rounded-md hover:bg-neutral-800 hover:text-white transition-all duration-200"
            >
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white hover:opacity-90 transition-opacity duration-200"
            >
              Create Account
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="w-11 h-11 rounded-md hover:bg-neutral-800 transition-colors duration-200 flex items-center justify-center text-neutral-300 hover:text-white"
            >
              {mobileDrawerOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-red-900 h-content lg:hidden">
            {/* Close button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleNavbar}
                className="w-11 h-11 rounded-md hover:bg-neutral-800 transition-colors duration-200 flex items-center justify-center text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col w-full justify-center h-fit items-center translate-y-[150px] px-4">
              <ul className="space-y-6 text-center mb-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className="text-xl font-bold text-white hover:text-orange-500 transition-colors duration-200 block py-2"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;