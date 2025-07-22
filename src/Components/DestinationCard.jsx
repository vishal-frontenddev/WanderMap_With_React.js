// src/components/DestinationCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DestinationCard = ({  id, name, image, rating = 4 }) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-blue-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Favorite Button */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 bg-white p-2 rounded-full z-10 shadow hover:bg-red-100"
      >
        {liked ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-500" />
        )}
      </button>

      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
          {name}
        </h3>

        {/* Stars */}
        <div className="flex items-center mt-2 mb-3 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${i < rating ? 'opacity-100' : 'opacity-30'} text-sm`}
            />
          ))}
        </div>

        {/* Button */}
     <Link to={`/destination/${id}`}>
      <button className="mt-2 bg-blue-600 text-white text-sm px-4 py-1 rounded-lg hover:bg-blue-700 transition">
          View Details
      </button>
    </Link>

     </div>


     
    </motion.div>
  );
};

export default DestinationCard;
