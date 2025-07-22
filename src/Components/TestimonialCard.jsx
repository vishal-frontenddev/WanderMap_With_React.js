// src/components/TestimonialCard.jsx
import { motion } from 'framer-motion';

export default function TestimonialCard({ image, name, location, quote, delay = 0 }) {
  return (
    <motion.div id='motion'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white w-[400px] rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full border-2 border-cyan-400 object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <p className="text-gray-600 italic leading-relaxed">“{quote}”</p>
    </motion.div>
  );
}
