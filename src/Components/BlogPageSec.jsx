import React from 'react'

// blogCard
import BlogCard from '../Components/BlogCard';

const BlogPageSec = () => {

const blogs = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg',
    title: 'Exploring the Hidden Valleys of Himachal',
    author: 'Anjali Mehra',
    date: 'July 10, 2025',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg',
    title: 'Top Beaches You Must Visit in Goa',
    author: 'Ravi Chauhan',
    date: 'June 25, 2025',
  },
  {
    id: 3,
    image: 'https://media.istockphoto.com/id/825020012/photo/indian-palace.jpg?b=1&s=612x612&w=0&k=20&c=yisQBiOYUZwzvYXXNdUngiXMfAl086bFcanouKbTaMw=',
    title: 'A Cultural Journey Through Rajasthan',
    author: 'Sana Sheikh',
    date: 'May 30, 2025',
  },
  {
    id: 4,
    image: 'https://media.istockphoto.com/id/1323025982/photo/young-men-ready-for-rafting-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=WVGY8hfJuojCUSyndHRnlGoHkXSECnB1yWw317HuhuY=',
    title: 'A Cultural Journey Through Uttrakhand',
    author: 'Sana Sheikh',
    date: 'May 30, 2025',
  },
   {
    id: 5,
    image: 'https://images.pexels.com/photos/3596102/pexels-photo-3596102.jpeg',
    title: 'A peaceful journey Through Hamta pass trek with chandratal lake',
    author: 'Sana Sheikh',
    date: 'May 30, 2025',
  },

    {
    id: 6,
    image: 'https://media.istockphoto.com/id/1087739670/photo/chandrashila-is-summit-of-the-tungnath-it-literally-means-moon-rock-it-is-located-at-a-height.jpg?b=1&s=612x612&w=0&k=20&c=gCSuJL-3uptXCXp7m02kH2nm0AF_jm3IqH-Xyt67Mjk=',
    title: 'A spritual journey through chopta tungnath & chandrasilla trek',
    author: 'Ravi Chauhan',
    date: 'June 25, 2025',
  },
];

  return (
    <>
    
        {/* blogCard */}
    
          <section className="bg-blue-50 py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Travel Stories & Blogs</h2>
        <p className="text-gray-600">Read inspiring experiences from real travelers</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} delay={index * 0.2} />
        ))}
      </div>
    </section>
    
    </>
  )
}

export default BlogPageSec