// src/pages/SingleBlogPage.jsx
import { useParams } from 'react-router-dom';
import blogs from '../Components/BlogData'; // 👈 yeh blogs data import karta hai


export default function SingleBlogPage() {
  const { id } = useParams(); // 👈 yeh URL se id fetch karta hai
  const blog = blogs.find(b => b.id === parseInt(id)); // 👈 us id ka blog dhoondta hai

  if (!blog) return <div className="p-10 text-red-500">Blog not found</div>;
  

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">By {blog.author} • {blog.date}</p>
      <p className="text-gray-700 leading-7 whitespace-pre-line">{blog.content}</p>
    </div>
  );
}
