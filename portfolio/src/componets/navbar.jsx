import { Link } from 'react-router-dom';
import Logo from '../assets/port-logo.png'


function Navigation(){

    return(
        <header className="navbar">
        <img src={Logo} alt="logo"  height="200px" width="auto"/>
        {/* <h2>Portfolio</h2> */}
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/certificates">Certificates</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Navigation