import Navigation from "../componets/navbar"
import Self from "../assets/self1.png"


function Home(){

    return(
        <div className="home-page">
           
            <h2>Home page</h2>
            <img src={Self} alt="myself"  className="self-one" height="500px" width="auto"/>
        </div>
    )
}

export default Home