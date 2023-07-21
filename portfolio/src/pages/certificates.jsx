import CertificateComponet from "../componets/CertificateComponet"
import cert1 from '../assets/udemy_html_css.png'
import cert2 from '../assets/sololearn_JavaScript_Certificate.png'
import cert3 from '../assets/web102_certificate.png'
import cert4 from '../assets/cs-certificate.png'
import cert5 from '../assets/EE_SD_Certificate.png'

function Certificates(){

    const certificateData = [
        {
            title: 'Udemy Web Design for Beginners: Real World Coding in HTML & CSS',
            image: cert1,
            description: 'In this course, I honed my front-end development skills, mastering fundamental languages like HTML and CSS to an intermediate level. I also gained proficiency in utilizing Bootstrap, Sass, and implementing responsive design. As a result, I am now capable of crafting diverse website layouts, ensuring they adapt seamlessly to various device sizes through responsive design techniques. Additionally, I can incorporate tasteful animations and effects using CSS, adding an extra layer of visual appeal to my projects. Through this learning experience, I have acquired the necessary expertise to bring any website concept to life with creativity and precision.',
        }, 
        {
            title: 'Sololearn JavaScript',
            image: cert2,
            description: 'I mastered fundamental concepts in JavaScript, including syntax, variables, data types, strings, template literals, conditional statements, control flow statements, and functions. These foundational elements paved the way for my journey as a React developer.',
        }, 
        {
            title: 'CodePath Intermediate Web Development',
            image: cert3,
            description: 'In an immersive project-based course, I delved into intermediate web development techniques, gaining expertise in various areas. I explored React basics, JSX, functional components, props, state, hooks, events, GitHub fundamentals, form handling, arrays as states, events within nested components, HTTP requests, Async/Await, APIs, component lifecycle, conditional rendering, filter(), map(), React Router, CRUD operations, and website deployment. This comprehensive course provided me with all the tools and knowledge necessary to confidently create my own React websites.',
        }, 
        {
            title: 'First Place Award for Computer Science in Senior Design Project',
            image: cert4,
            description: 'Achieved first place in the Computer Science division for my Engineering Senior Design project. Developed a full-stack website using React, incorporating advanced concepts like AWS Relational Database Services (RDS) with PostgreSQL. On the front-end, I efficiently executed the code using React, while on the back-end, I leveraged Express.js and Node.js to implement error handling, user authentication, and API requests. This project showcases my proficiency in both front-end and back-end technologies, highlighting my ability to deliver robust and sophisticated web applications.',
        }, 
        {
            title: 'First Place Award for Electrical Engineering in Senior Design Project',
            image: cert5,
            description: 'Secured first place in the Electrical Engineering division for my Engineering Senior Design project. Spearheaded the development of a cutting-edge device to record pressure data, which was then seamlessly uploaded to a cloud database utilizing AWS Relational Database Services (RDS) with PostgreSQL. The data transmission was skillfully executed using Node-RED, ensuring the seamless flow of information to the database. Subsequently, all the data was harnessed to create a robust and fully functional PERN (PostgreSQL, Express.js, React, Node.js) website, showcasing my prowess in full-stack web development. This project not only showcased my technical acumen but also exemplified my dedication to innovation and problem-solving in the realm of electrical engineering.',
        }, 
    ]

    return(
        <div className="certificate-page">
            <h1 className="page-header"> Certificates Earned</h1>
            {certificateData.map((item, index) => (
                <CertificateComponet key={index} {...item} />
            ))}
        </div>
    )
}

export default Certificates