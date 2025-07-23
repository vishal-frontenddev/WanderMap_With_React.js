import React from 'react';
import Footer from '../Components/Footer';


const About = () => {
  return (
    <div id='about' className=" h-[80vh] bg-white py-12  text-gray-800">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">About WanderMap</h1>

      <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
        <p>
          WanderMap is your ultimate travel planning companion. We make it easy to discover beautiful destinations, plan your trips with interactive maps, and explore places with real insights.
        </p>

        <p>
          Our goal is to simplify travel planning for everyone – whether you're a backpacker, a family traveler, or someone planning their first solo trip.
        </p>

        <p>
          With WanderMap, you can view popular spots, mark favorites, explore destinations interactively, and even track your travel journey.
        </p>

        <p>
          We believe travel should be more than just bookings – it should be an experience. And we’re here to enhance yours.
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600">🌍 Made with ❤️ by travel lovers, for travel lovers.</p>
      </div>


      <div id='aboutFooter' className='mt-30'>
        <Footer />
      </div>
      
    </div>
    
  );
};

export default About;
