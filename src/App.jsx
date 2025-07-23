import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Planner from './pages/Planner';
import Map from './pages/Map';
import Contact from './pages/Contact';

import DestinationDetailPage from './pages/DestinationDetailPage';

import SingleBlogPage from './pages/SingleBlogPage';
import BlogPageSec from './Components/BlogPageSec';

import PrivacyPolicy from './pages/PrivacyPolicy';

import TermsAndConditions from './pages/TermsAndConditions';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<Contact />} />

        {/* destination */}
        <Route path="/destination/:id" element={<DestinationDetailPage />} />

        {/* features */}

        {/* blog */}
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path='/blog' element={<BlogPageSec />} />


        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<TermsAndConditions />} />
        
      </Routes>
    </>
  );
}

export default App;




