import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='relative min-h-[90vh] flex items-center justify-center'>
      {/* Background with overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-navy/90 to-navy'>
        <div className='absolute inset-0 bg-gradient-to-r from-navy/90 via-transparent to-navy/90' />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative z-10 text-center px-4 max-w-4xl mx-auto'
      >
        <h1 className='text-4xl md:text-6xl font-bold text-light-slate mb-6 leading-tight'>
          Connecting Your Business
          <span className='bg-gradient-to-r from-sky-blue to-accent-orange bg-clip-text text-transparent'>
            {' '}
            to the World
          </span>
        </h1>

        <p className='text-lg md:text-xl text-slate mb-12 max-w-2xl mx-auto'>
          Your reliable partner in global export and import solutions, ensuring
          seamless and efficient trade across borders.
        </p>

        <Link
          to='/quote'
          className='inline-flex items-center px-8 py-4 bg-sky-blue text-navy font-bold rounded-full 
                     hover:bg-accent-orange transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-sky-blue/20'
        >
          Get a Quote
          <svg
            className='ml-2 w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 7l5 5m0 0l-5 5m5-5H6'
            />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
