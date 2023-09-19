
import Self from "../assets/self1.png"
import { Link } from "react-router-dom"



function Home(){


    return(
        <div className="home-page">
           
            <h2 className="page-header">Amelia Trevino's Personal Portfolio</h2>
            <div className="image-header">
                <h2>Hello, I'm <span className="neon-text">Amelia!</span> 👋🏼 <br/> An Aspiring <span className="neon-text">Full Stack Developer</span> </h2>
                <img src={Self} alt="myself"  className="self-one" />
            </div>
            <div className="intro-section">
                <p>I am a dedicated and passionate web developer with a background in electrical engineering. Currently pursuing a Master's degree in Computer Science with a focus on Cybersecurity and Artificial Intelligence.</p>
                <p>With expertise in frontend development using React and a strong foundation in full-stack web development, I bring a creative and problem-solving approach to my projects. Experience in languages such as C, C++, Python, Java, HTML, CSS, and JavaScript.</p>
                <p>Explore my portfolio to discover the projects I've worked on, showcasing my technical abilities and innovative mindset.</p>
                <p>Reach out to collaborate or inquire further. Let's create together!</p>
                <div className="home-buttons">
                    <Link to="/about" className="links">Learn About Me!</Link>
                    <Link to="/projects" className="links">See my Projects!</Link>
                    <Link to="/contact" className="links">Contact Me!</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Home