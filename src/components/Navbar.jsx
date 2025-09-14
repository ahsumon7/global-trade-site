import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-navy/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-light-slate hover:text-sky-blue transition-colors">
            GlobalTrade
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-slate hover:text-sky-blue transition-colors text-lg"
              >
                {item}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-sky-blue text-navy px-6 py-2 rounded-full font-semibold hover:bg-accent-orange transition-colors"
            >
              Get Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4"
          >
            <div className="flex flex-col space-y-4">
              {['Services', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-slate hover:text-sky-blue transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button className="bg-sky-blue text-navy px-6 py-2 rounded-full font-semibold hover:bg-accent-orange transition-colors">
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
