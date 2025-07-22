import React from 'react'
import { Link } from 'react-router-dom';


// featurCard
import FeatureCard from '../Components/FeatureCard';
import { MapPin, CalendarCheck, Compass, Star } from 'lucide-react';


// testimonial-sec
import TestimonialCard from '../Components/TestimonialCard';


import BlogPageSec from '../Components/BlogPageSec';

// destinationPage
import DestinationPageSec from '../Components/DestinationPageSec';

// footer
import Footer from '../Components/Footer';





const home = () => {

const features = [
  {
    icon: <MapPin size={28} />,
    title: 'Smart Trip Planner',
    desc: 'Easily plan your trips and add multiple destinations on the go.',
    gradient: 'bg-gradient-to-tr from-blue-500 to-blue-700',
  },
  {
    icon: <Compass size={28} />,
    title: 'Interactive Map',
    desc: 'Explore locations visually with our interactive and zoomable map.',
    gradient: 'bg-gradient-to-tr from-green-400 to-emerald-600',
  },
  {
    icon: <Star size={28} />,
    title: 'Save Favorites',
    desc: 'Bookmark spots and revisit them anytime you want.',
    gradient: 'bg-gradient-to-tr from-yellow-400 to-orange-500',
  },
  {
    icon: <CalendarCheck size={28} />,
    title: 'Daily Planner',
    desc: 'Organize your travel days with scheduled plans.',
    gradient: 'bg-gradient-to-tr from-purple-500 to-indigo-600',
  },
];


// testimonial-sec
const testimonials = [
  {
    name: "Aarav Sharma",
    location: "Delhi, India",
    quote: "WanderMap made my Ladakh trip unforgettable! The UI is smooth and the destinations are well curated.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sara Khan",
    location: "Jaipur, India",
    quote: "This app is like a travel buddy! Loved the recommendations and the interactive map feature.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Rohan Verma",
    location: "Mumbai, India",
    quote: "Super useful for planning trips. Found some hidden gems thanks to WanderMap!",
    image: "https://i.pravatar.cc/150?img=33",
  },
   {
    name: "Rohan Verma",
    location: "Mumbai, India",
    quote: "Super useful for planning trips. Found some hidden gems thanks to WanderMap!",
    image: "https://i.pravatar.cc/150?img=33",
  },

];




  return (
    <>

    {/* home-hero-sec */}
    
     <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
            Discover Your Next Adventure <br />
            with <span className="text-blue-600">WanderMap</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-xl">
            Plan your journey, explore hidden gems, and track your travel routes — all in one interactive platform.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <Link to="/planner" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
              Start Planning
            </Link>
            <Link to="/map" className="text-blue-600 font-semibold hover:underline">
              Explore the Map
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/33092499/pexels-photo-33092499.jpeg" // change with your own if needed
            alt="Travel Planner"
            className="w-full h-[450px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>



    {/* featureCard */}

  <section className="py-20 bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#e3f2fd ">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">
      Why Choose WanderMap?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {features.map((feature, i) => (
        <FeatureCard
          key={i}
          icon={feature.icon}
          title={feature.title}
          desc={feature.desc}
          gradient={feature.gradient}
        />
      ))}
    </div>
  </div>
</section>


{/* DestinationCard */}

  <div>
    <DestinationPageSec />
  </div>


  {/* blogcard */}

    <div>
        <BlogPageSec />
    </div>


   {/* testimonial-sec */}

     <section id='testimonial-main-sec' className="bg-gradient-to-br from-blue-50 to-cyan-100 py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">What Our Travelers Say</h2>
        <p className="text-gray-600">Real stories from our happy explorers</p>
      </div>

      <div id='testimonial' className="flex justify-center gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            image={t.image}
            name={t.name}
            location={t.location}
            quote={t.quote}
            delay={i * 0.2}
          />
        ))}
      </div>
    </section>



    <div>
      <Footer />
    </div>
    


    </>
  )
}

export default home