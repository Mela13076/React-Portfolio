import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Certificates from './pages/certificates';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navigation from './componets/navbar';

function App() {

    // Function to set a cookie with SameSite=None; Secure
    const setMyCookie = () => {
      document.cookie = 'myCookie=myValue; SameSite=None; Secure';
    };

    // Call the function to set the cookie
    setMyCookie();

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
