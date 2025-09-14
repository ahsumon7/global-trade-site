import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className='card-glow group bg-light-navy p-8 rounded-lg shadow-lg border border-slate/20 h-full'
    >
      <div className='text-accent-orange mb-4 transition-transform duration-300 group-hover:scale-110'>
        {icon}
      </div>
      <h3 className='text-2xl font-bold text-light-slate mb-3 transition-colors duration-300 group-hover:text-sky-blue'>
        {title}
      </h3>
      <p className='text-slate'>{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
