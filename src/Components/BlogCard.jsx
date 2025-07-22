// src/components/BlogCard.jsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogCard({ id, image, title, author, date, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">By {author} • {date}</p>

        {/* 👇 Yeh button react-router ke through us blog id ke page pe le jata hai */}
        <Link to={`/blog/${id}`}>
          <button className="text-cyan-600 hover:text-cyan-800 font-medium flex items-center gap-1">
            Read Story <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
