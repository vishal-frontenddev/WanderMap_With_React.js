// src/components/FeatureCard.jsx

// src/components/FeatureCard.jsx

import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, desc, gradient }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`group rounded-2xl p-6 shadow-lg text-white ${gradient} cursor-pointer`}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-blue-600 mb-4 text-3xl transition-transform duration-300 group-hover:rotate-12">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90">{desc}</p>
    </motion.div>
  );
};

export default FeatureCard;
