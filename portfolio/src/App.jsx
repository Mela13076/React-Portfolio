import {Routes, Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Certificates from './pages/certificates';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navigation from './componets/navbar';
import Cookies from 'js-cookie';


function App() {


    // useEffect(() => {
    //   const myCookie = Cookies.get('myCookieName');
  
    //   if (myCookie) {
    //     console.log(`Cookie found: ${myCookie}`);
    //     const sameSiteAttribute = Cookies.getAttributes('myCookieName').samesite;
    //     console.log(`SameSite attribute: ${sameSiteAttribute}`);
    //   } else {
    //     console.log('Cookie not found.');
    //   }
    // }, []);

  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
