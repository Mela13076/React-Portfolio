import CertificateComponet from "../componets/CertificateComponet"
import cert1 from '../assets/udemy_html_css.png'
import cert2 from '../assets/sololearn_JavaScript_Certificate.png'
import cert3 from '../assets/web102_certificate.png'
import cert4 from '../assets/cs-certificate.png'
import cert5 from '../assets/EE_SD_Certificate.png'

function Certificates(){

    const data = [
        {
            title: 'Udemy Web Design for Beginners: Real World Coding in HTML & CSS',
            image: cert1,
            description: 'In this course, I honed my front-end development skills, mastering fundamental languages like HTML and CSS to an intermediate level. I also gained proficiency in utilizing Bootstrap, Sass, and implementing responsive design. As a result, I am now capable of crafting diverse website layouts, ensuring they adapt seamlessly to various device sizes through responsive design techniques. Additionally, I can incorporate tasteful animations and effects using CSS, adding an extra layer of visual appeal to my projects. Through this learning experience, I have acquired the necessary expertise to bring any website concept to life with creativity and precision.',
        }, 
        {
            title: 'Sololearn JavaScript',
            image: cert2,
            description: 'this is the description',
        }, 
        {
            title: 'CodePath Intermediate Web Development',
            image: cert3,
            description: 'this is the description',
        }, 
        {
            title: 'First Place Award for Computer Science in Senior Design Project',
            image: cert4,
            description: 'this is the description',
        }, 
        {
            title: 'First Place Award for Electrical Engineering in Senior Design Project',
            image: cert5,
            description: 'this is the description',
        }, 
    ]

    return(
        <div className="certificate-page">
            <h1 className="page-header"> Certificates Earned</h1>
            {data.map((item, index) => (
                <CertificateComponet key={index} {...item} />
            ))}
        </div>
    )
}

export default Certificates