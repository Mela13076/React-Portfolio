import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Certificates from './pages/certificates';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navigation from './componets/navbar';

function App() {


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
