import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className='bg-slate/5 p-8 rounded-lg shadow-lg border border-slate/20 transition-all duration-300'
    >
      <div className='text-accent-orange mb-4'>{icon}</div>
      <h3 className='text-2xl font-bold text-light-slate mb-3'>{title}</h3>
      <p className='text-slate'>{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
