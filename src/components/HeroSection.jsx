import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className='relative h-[80vh] min-h-[500px] flex items-center justify-center text-white'
      style={{
        backgroundImage: `url('https://placehold.co/1920x1080/0a192f/88c0d0?text=Global+Trade')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 bg-navy bg-opacity-60' />
      <div className='relative z-10 text-center px-4'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl md:text-6xl font-extrabold text-light-slate mb-4'
        >
          Connecting Your Business to the World
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-lg md:text-xl max-w-3xl mx-auto text-sky-blue mb-8'
        >
          Your reliable partner in global export and import solutions, ensuring
          seamless and efficient trade across borders.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to='/contact'
            className='bg-accent-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105'
          >
            Get a Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
