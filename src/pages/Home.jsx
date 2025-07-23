import React from 'react'
import { Link } from 'react-router-dom';


// featurCard
import FeatureCard from '../Components/FeatureCard';
import { MapPin, CalendarCheck, Compass, Star } from 'lucide-react';


// testimonial-sec
import TestimonialCard from '../Components/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


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
    "name": "Aarav Sharma",
    "location": "Delhi, India",
    "quote": "WanderMap helped me plan my entire North India trip so easily. I found new places I never knew existed.",
    "image": "https://i.pravatar.cc/150?img=12"
  },
  {
    "name": "Sara Khan",
    "location": "Jaipur, India",
    "quote": "I really loved how simple and interactive the map was. It made choosing destinations fun and effortless for me.",
    "image": "https://i.pravatar.cc/150?img=47"
  },
  {
    "name": "Rohan Verma",
    "location": "Mumbai, India",
    "quote": "Thanks to WanderMap, I explored beautiful hidden gems near Manali that even locals didn’t recommend. Highly recommended tool!",
    "image": "https://i.pravatar.cc/150?img=33"
  },
  {
    "name": "Aarav Mehta",
    "location": "Goa",
    "quote": "The map UI was very clean and responsive. I liked how each destination had images, ratings, and quick details.",
    "image": "https://i.pravatar.cc/150?img=32"
  },
  {
    "name": "Sanya Kapoor",
    "location": "Manali",
    "quote": "I used WanderMap for my Goa trip. The popups showing images and travel ratings helped me make better plans.",
    "image": "https://i.pravatar.cc/150?img=5"
  },
  {
    "name": "Karan Verma",
    "location": "Thailand",
    "quote": "WanderMap gave me exactly what I needed — fast travel ideas, live location zoom, and detailed cards for every city.",
    "image": "https://i.pravatar.cc/150?img=16"
  },
  {
    "name": "Riya Sharma",
    "location": "Paris",
    "quote": "Exploring Europe with WanderMap was amazing. It helped me mark visited places and discover popular tourist areas instantly.",
    "image": "https://i.pravatar.cc/150?img=48"
  },
  {
    "name": "Nikhil Joshi",
    "location": "Pune",
    "quote": "I never expected a map-based app to be this easy and beautiful. Destinations loaded fast with smooth animations and tips.",
    "image": "https://i.pravatar.cc/150?img=21"
  },
  {
    "name": "Megha Jain",
    "location": "Agra",
    "quote": "The destination cards, ratings, and marker icons were very helpful in quickly identifying where to go and what to skip.",
    "image": "https://i.pravatar.cc/150?img=31"
  },
  {
    "name": "Aditya Singh",
    "location": "Lucknow",
    "quote": "As a frequent traveler, I found this app perfect. I especially liked how selected locations zoomed in with animations.",
    "image": "https://i.pravatar.cc/150?img=29"
  },
  {
    "name": "Priya Desai",
    "location": "Bangalore",
    "quote": "The hover popups gave me great insights without opening new pages. Also, the routes between cities made planning easy.",
    "image": "https://i.pravatar.cc/150?img=15"
  },
  {
    "name": "Tanvi Reddy",
    "location": "Hyderabad",
    "quote": "Honestly, this map experience was better than I imagined. Even my non-tech friend found it easy to navigate around.",
    "image": "https://i.pravatar.cc/150?img=13"
  },
  {
    "name": "Dev Patel",
    "location": "Ahmedabad",
    "quote": "I loved the card design and how each place had a proper rating, image, and description to help me decide.",
    "image": "https://i.pravatar.cc/150?img=37"
  },
  {
    "name": "Ishita Roy",
    "location": "Kolkata",
    "quote": "One of the best planning tools for backpackers like me. I marked, zoomed, and added notes in one platform.",
    "image": "https://i.pravatar.cc/150?img=20"
  },
  {
    "name": "Aryan Kapoor",
    "location": "Chandigarh",
    "quote": "Easy, useful, and modern! The color-coded markers and ratings gave me clarity on which places were worth visiting.",
    "image": "https://i.pravatar.cc/150?img=34"
  },
  {
    "name": "Neha Sethi",
    "location": "Shimla",
    "quote": "It felt like having a personal digital tour guide. The information provided with each marker was clear and very helpful.",
    "image": "https://i.pravatar.cc/150?img=41"
  },
  {
    "name": "Rahul Nair",
    "location": "Kerala",
    "quote": "I’ve used many travel apps but this one impressed me the most. Smart use of popups and destination filters.",
    "image": "https://i.pravatar.cc/150?img=39"
  },
  {
    "name": "Aisha Malik",
    "location": "Dubai",
    "quote": "Whether it’s Thailand or India, the map makes it easy to discover new places and view highlights with images.",
    "image": "https://i.pravatar.cc/150?img=17"
  },
  {
    "name": "Vikram Rana",
    "location": "Leh",
    "quote": "The zoom-in feature on selection was smooth and beautiful. I enjoyed exploring the routes and travel options between cities.",
    "image": "https://i.pravatar.cc/150?img=43"
  },
  {
    "name": "Pooja Chawla",
    "location": "Udaipur",
    "quote": "WanderMap became my go-to for short and long trip planning. Everything is visual, fast, and informative right away.",
    "image": "https://i.pravatar.cc/150?img=38"
  }
];




  return (
    <>

    {/* home-hero-sec */}
    
     <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-10 md:py-24">
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

       <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-8 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">What Our Travelers Say</h2>
        <p className="text-gray-600">Real stories from our happy explorers</p>
      </div>

      <Swiper
        modules={[Autoplay, ]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="h-full">
            <TestimonialCard {...t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>


    <div>
      <Footer />
    </div>
    


    </>
  )
}

export default home