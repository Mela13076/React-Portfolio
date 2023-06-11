import Navigation from "../componets/navbar"
import Self from "../assets/self1.png"


function Home(){

    return(
        <div className="home-page">
           
            <h2>Home page</h2>
            <div className="image-header">
                <h2>Hello, I'm Amelia! 👋🏼 <br/> An Aspiring Full Stack Developer</h2>
                <img src={Self} alt="myself"  className="self-one" />
            </div>
            
        </div>
    )
}

export default Home