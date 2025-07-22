import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './pages/Home';
import Planner from './pages/Planner';
import Map from './pages/Map';
import Contact from './pages/Contact';

import DestinationDetailPage from './pages/DestinationDetailPage';

import SingleBlogPage from './pages/SingleBlogPage';
import BlogPageSec from './Components/BlogPageSec';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<Contact />} />

        {/* destination */}
        <Route path="/destination/:id" element={<DestinationDetailPage />} />

        {/* features */}

        {/* blog */}
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path='/blog' element={<BlogPageSec />} />
        
      </Routes>
    </>
  );
}

export default App;




