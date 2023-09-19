import Git from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Mail from '../assets/email.png'
import Phone from '../assets/phone.png'
import Address from '../assets/location.png'

function Contact(){

    return(
        <div className="contact-page">
            <h2 className="page-header">Contact Me</h2>

            <div className="content-con">
                <div className="contactInfo boxes-con">
                    <h2 className="introCon">Contact Info</h2>
                    <p className="introPara">Always available for new opportunities!</p>
                    
                    <div className="box-contactInfo">
                        <div className="box">
                            <div className="icon">
                                <img src={Address} alt="Address icon" />
                            </div>
                            <div className="infoText address">
                                <h3>Address</h3>
                                <p>Amelia R Trevino <br />1482 Seale Ave. A107 <br /> Kingsville, Tx<br /> 78363 </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <img src={Phone} alt="phone icon" />
                            </div>
                            <div className="infoText">
                                <h3>Phone Number:</h3>
                                <p>(956) 320-5000</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <img src={Mail} alt="mail icon" />
                            </div>
                            <div className="infoText">
                                <h3>Email</h3>
                                <p>Trevinoamelia25@gmail.com</p>
                            </div>
                        </div>
                        <h3 className="socialContact">Social Contacts</h3>
                        <div className="boxes-social">
                            <div className="icon" >
                                <a href="https://www.linkedin.com/in/amelia-trevino-240a47222/" target='_blank'>
                                <img src={Linkedin} alt="Linkedin icon" />
                                </a>
                            </div>
                            <div className="icon" >
                                <a href="https://github.com/Mela13076" target='_blank'>
                                <img src={Git} alt="Linkedin icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="message-form boxes-con">
                    <h2>Message Me</h2>
                    <form>
                        <label htmlFor="name" id="name-label">Full Name</label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        className="input"
                        placeholder="Enter your full name"
                        required
                        />

                        <label htmlFor="email" id="email-label">Email</label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="input"
                        placeholder="Enter your email"
                        required
                        />

                        <label htmlFor="message" id="message-label">Message</label>
                        <textarea
                        id="message"
                        rows="5"
                        className="input-textarea"
                        name="message"
                        placeholder="Enter your message here"
                        ></textarea>

                        <button type="submit" id="submit" className="submit-button">
                        Submit
                        </button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}

export default Contact