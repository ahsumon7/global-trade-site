import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-navy/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <Link to='/' className='text-2xl font-bold text-sky-blue'>
            Global<span className='text-accent-orange'>Trade</span>
            {/* Or use your logo: <img src="/path/to/logo.png" alt="Logo" className="h-10" /> */}
          </Link>
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-accent-orange'
                      : 'text-light-slate hover:text-sky-blue'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-light-slate focus:outline-none'
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-navy/95 backdrop-blur-sm absolute w-full'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center'>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 w-full text-center ${
                    isActive
                      ? 'text-accent-orange bg-slate/20'
                      : 'text-light-slate hover:text-sky-blue hover:bg-slate/10'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
