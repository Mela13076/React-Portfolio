import Gaming from '../assets/gaming.gif'
import Webdev from '../assets/webdev.gif'
import Fullstack from '../assets/fullstack.gif'



function About(){

    return(
        <div className="about-page">
            <h2 className="page-header">Learn About Me!</h2>
            <div className="content-section">
                <div className="introduction square">
                    <h2 className="neon-text-about">Introduction</h2>
                    <p>Hello again! My name is Amelia Trevino, and I am a Computer Science student at TAMUK. However, my true passion lies in becoming a full-stack web developer. I have a deep love for technology and a strong drive to solve problems. I am dedicated to continuously learning and expanding my skill set. </p>
                    <p>On a personal note, I'm an emotional goofball who believes in bringing a positive and lighthearted attitude to everything I do. At the same time, I am responsible and hardworking, always striving to give my best in any endeavor I undertake.</p>
                </div>

                <div className="educational-background square">  
                    <h2 className="neon-text-about">Educational Background</h2>
                    <div className="sections-blue">
                        <h3 className='neon-text'><u>Bachelors of Science in Eletrical Engineering</u></h3>
                        <p>Graduated <b>May 2023</b> from <b>Texas A&M University Kingsville</b> </p>
                        <p><b>GPA:</b> 3.7 with Magna Cum Laude</p>
                        <p><b>Minors</b></p>
                        <ul className='about-list'>
                            <li>- Computer Science</li>
                            <li>- Mathematics</li>
                        </ul>
                        
                        <p><b>Courses</b></p>
                        <ul className='about-list'>
                            <li>- Data Structures & Algorithms</li>
                            <li>- Object Oriented Programming</li>
                            <li>- Software Engineering 1 & 2</li>
                            <li>- Programming Languages</li>
                        </ul>
                    </div>
                    <div className="sections-blue">
                        <h3 className='neon-text'><u>Masters of Science in Computer Science</u></h3>
                        <p>Estimated Graduation: <b>May 2025</b> from <b>Texas A&M University Kingsville</b> </p>
                        <p><b>Focus</b></p>
                        <ul className='about-list'>
                            <li>- Cybersecurity</li>
                            <li>- Artificial Intelligence</li>
                        </ul>
                        
                        <p><b>Courses</b></p>
                        <ul className='about-list'>
                            <li>- Foundation in Computer Science</li>
                            <li>- Operating Systems</li>
                            <li>- Analysis of Algorithms</li>
                        </ul>
                    </div>
                    

                    
                 </div>

                 
                

                <div className="work-experience square">
                    <h2 className="neon-text-about">Work Experience</h2>
                    <div className="sections-pink">
                            <h3 className='neon-text-blue'><b><u>Engineering Tutor</u></b></h3>
                        <p><i>Texas A&M University Kingsville: Fall 2021-current</i></p>
                        <p><b>Descption:</b></p>
                        <ul className='about-list'>
                            <li>- Offered academic support to over 300 students in various subjects outside classroom to help to improve classwork and grades.</li>
                            <li>- Tutor in Calculus, Physics, Electrical Engineering courses, and Computer Science courses</li>
                        </ul>
                    </div>
                    <div className="sections-pink">
                            <h3 className='neon-text-blue'><b><u>Computer Science Supplemental Instructor </u></b></h3>
                        <p><i>Texas A&M University Kingsville: Spring 2023 - current</i></p>
                        <p><b>Descption:</b></p>
                        <ul className='about-list'>
                            <li>- Collaborated with course instructor, improving student comprehension and exam performance through tailored support and engaging activities in <i>Intro to Computer Science, Object Oriented Programming, & Object Oriented Software Engineering</i> </li>
                            <li>- Conducted 2 weekly review sessions for each course and provided guidance on assignments and exam preparation.</li>
                            
                        </ul>
                    </div>
                    <div className="sections-pink">
                            <h3 className='neon-text-blue'><b><u>CodePath Web Development Tech Fellow</u></b></h3>
                        <p><i>CodePath: June 2023 - current </i></p>
                        <p><b>Descption:</b></p>
                        <ul className='about-list'>
                            <li>- Promoted campus engagement as a CodePath Tech Fellow, actively encouraging fellow students to join and leverage the benefits of CodePath courses for computer science skill enhancement.</li>
                            <li>- Provided student mentorship in <i>Intermediate Web Development</i> by overseeing student pods, offering guidance, answering questions, and conducting office hours to facilitate a collaborative and successful learning experience in the Intermediate Web Development course.</li>
                            
                        </ul>
                    </div>
                    <div className="sections-pink">
                            <h3 className='neon-text-blue'><b><u>Web Development Intern</u></b></h3>
                        <p><i>TLT - Tommorow's Leaders Today: Fall 2023</i></p>
                        <p><b>Descption:</b></p>
                        <ul className='about-list'>
                            <li>- Assist in updating TLT-Tomorrow's Leaders Today's website, incorporating new content, and implementing innovative technologies.</li>
                            <li>- Analyze website data and user analytics to tailor the platform to customers' interests and needs.</li>
                            <li>- Internship focuses on enhancing the organization's online presence, optimizing user engagement, and providing valuable insights for website improvement.</li>
                        </ul>
                    </div>
                 </div>

                <div className="professional-journey square">
                    <h2 className="neon-text-about">Professional Journey</h2>
                    <p>My journey into technology began during my electrical engineering bachelor's degree. As I explored computer science, I found my passion, leading to doing my Master's in CS. During my final undergrad year, I discovered web development and aimed to make it my career.</p>
                    <p>Taking Codepath's Intermediate Web Development course, I combined it with my personal learning journey, crafting a website for my senior capstone project, which won first place in the computer science division. Now, I'm a first-year master's student focusing on cybersecurity and AI. I'm dedicated to honing my web development skills and excited to serve as a Codepath Tech Fellow and start my first web development internship this fall.</p>
                    <p>My path embodies determination, continuous learning, and a quest for excellence in engineering and web development. I eagerly anticipate the opportunities and challenges ahead in my tech career.</p>
                </div>

                <div className="technical-skills square">
                    <h2 className="neon-text-about">Technical Skills</h2>
                    <h3><b><u>Coding Languages</u></b></h3>
                    <p><b>Novice: </b> Python, C, Go, Java, SQL</p>
                    <p><b>Intermediate: </b>JavaScript, HTML, CSS</p>

                    <h3><b><u>Technologies</u></b></h3>
                    <p>React.js, Node.js, Express, Git</p>

                    <h3><b><u>Certificates</u></b></h3>
                    <ul className='about-list'>
                        <li>- Sololearn: JavaScript</li>
                        <li>- Udemy: Web Design for Beginners</li>
                        <li>- Codepath: Intermediate Web Development</li>
                    </ul>

                    <h3><b><u>Soft Skills</u></b></h3>
                    <ul className='about-list'>
                        <li>- Communication</li>
                        <li>- Problem-Solving</li>
                        <li>- Attention to Detail</li>
                        <li>- Adaptability</li>
                        <li>- Time Management</li>
                        <li>- Teamwork</li>
                        <li>- Creativity</li>
                    </ul>
                    
                </div>

                <div className="specialization square">
                    <h2 className="neon-text-about">Specialization</h2>
                    <p>I specialize in web development with a strong focus on React.js for creating dynamic user interfaces. I'm also actively expanding my skills in backend development with Node.js and Express to become a versatile full-stack developer. My goal is to deliver seamless, end-to-end web solutions, combining frontend aesthetics with robust backend functionality.</p>
                    <img src={Fullstack} width="70%" className='about-images' alt='full stack gif'/>
                </div>
                
                <div className="achievements square">
                    <h2 className="neon-text-about">Achievements</h2>
                    <ul className="about-list">
                        <li>
                        - Graduated with a Bachelor's in Electrical Engineering with Magna Cum Laude honors.
                        </li>
                        <li>
                        - First place in the Electrical Engineering and Computer Science division for my capstone project.
                        </li>
                        <li>
                        - Secured my first web development internship.
                        </li>
                    </ul>
                </div>

                <div className="personal-interest square">
                    <h2 className="neon-text-about">Hobbies</h2>
                    <p>Coding websites is my main hobby, but when I'm not at my computer, I enjoy watching anime and playing various video games.</p>
                    <img src={Gaming} className='about-images' alt='gaming girl gif'/>
                </div>

                <div className="future-aspirations square">
                    <h2 className="neon-text-about">Future Aspirations</h2>
                    <p>I aspire to become a skilled full stack web developer. After gaining experience in front end development, I have now embarked on learning back end web development.</p>
                    <img src={Webdev} width="95%" className='about-images' alt='web development gif'/>
                </div>

            </div>
        </div>
    )
}

export default About