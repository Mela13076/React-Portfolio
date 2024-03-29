import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import React, { useState } from 'react';


function Navigation(){

    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
      
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo"  height="60px" width="auto"/>
            </div>
            <div className={`menu ${isMenuOpen ? 'open' : 'closed'}`}>
                {/* <a href="#home">Home</a>
                <a href="#about">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#certificates">Certificates</a>
                <a href="#contact">Contact</a> */}
                <ul>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/certificates" onClick={closeMenu}>Certificates</Link></li>
                    <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </div>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
    
}

export default Navigation



// return(
    //     <header className="navbar">
    //     <img src={Logo} alt="logo"  height="200px" width="auto"/>
    //     {/* <h2>Portfolio</h2> */}
    //     <nav>
            // <ul>
            //     <li><Link to="/">Home</Link></li>
            //     <li><Link to="/about">About</Link></li>
            //     <li><Link to="/certificates">Certificates</Link></li>
            //     <li><Link to="/projects">Projects</Link></li>
            //     <li><Link to="/contact">Contact</Link></li>
            // </ul>
    //     </nav>
    // </header>
    // )