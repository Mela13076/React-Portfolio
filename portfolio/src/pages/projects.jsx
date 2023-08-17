import ProjectComponet from "../componets/projectComponet"


function Projects(){

    const projectData = [
        
        {
            name: 'Full Stack Project: Digital Pressure Recorder (DPR) Data Management',
            gif: 'https://i.imgur.com/ZEFm7pi.gif',
            description: "Developed a website for a company, streamlining access to pressure data by transitioning from traditional paper chart recorders to an efficient online database system. All data is captured digitally, seamlessly uploaded to the database, and subsequently retrieved by the website. The platform presents comprehensive data within an organized table format, offering user-friendly filtering options for enhanced data analysis and retrieval.",
            features: ['Comprehensive Data Display: Upon successful login, users are greeted with an intuitive interface presenting a comprehensive table of data. This table includes vital information such as date, time, job number, and technician name, providing a holistic view of the recorded data.',
                'Dynamic Data Filtering: Our site offers the unique ability to filter and sort data according to specific criteria. This feature enhances data exploration and enables users to extract meaningful insights from vast datasets.',
                'Cutting-Edge Technology Stack: Employing the PERN (PostgreSQL, Express.js, React, Node.js) full stack methodology, we harnessed the power of React for the frontend, utilized AWS RDS and PostgreSQL for the database, and leveraged Express.js and Node.js for robust backend functionality.',
                'Responsive Design: The DPR Database Site boasts a fully responsive design, ensuring seamless user experiences across various devices. The responsive navigation bar further enhances user accessibility and engagement.',
                'Security at the Core: Security remains paramount, and we implemented a highly secure login system with password hashing using bcrypt. This fortified authentication process safeguards user data and ensures the utmost privacy.'],
            technologies: ['Frontend: HTML, CSS, JavaScript, React.js',
            'Backend: Node.js, Express.js',
            'Database: Postgres + AWS RDS',
            'Authentication: bcrypt'],
            link: 'Not hosted',
            github: 'https://github.com/Mela13076/dpr-data-management-project',
            duration: '6 months',
            challenges: 'Confronted with limited prior experience in web development, I embarked on a transformative six-month journey. Overcoming this challenge, I swiftly acquired the fundamentals of full-stack development. This accelerated learning enabled me to deliver a robust solution that showcases my commitment and growth in the field.',
        },
            
        {
            name: 'Star Wars Archives',
            gif: 'https://i.imgur.com/6HFkMxr.gif',
            description: 'The "Star Wars Archives" is a dynamic online platform that fosters a thriving community of Star Wars enthusiasts. Reminiscent of a Reddit-style forum, this project empowers users to create and share captivating posts spanning various Star Wars topics. Each post comprises a title, an image URL, a descriptive passage, and a designated topic. A secure PIN system allows users to effortlessly edit their posts after submission, ensuring accuracy and relevance.',
            features: ['Post Creation and Management: Users can craft detailed posts, complete with titles, images, descriptions, and topic categorization. The innovative PIN system grants exclusive post-editing privileges.', 
                'Archive Gallery: All posts find a home in the Archive Gallery, the central hub for exploring and filtering posts. Users can organize content by chronological order, popularity (upvotes), and specific topics.',
                'Individual Post Pages: Each post leads to a dedicated page displaying a timestamp, title, captivating visuals, and the chosen topic. The option to edit or delete posts using the correct PIN enhances user control over their content.',
                'Engaging Comment System: Dynamic discussions thrive through the integrated comment system. Users can contribute insights and engage with fellow Star Wars enthusiasts.',
                'Seamless Responsiveness: The platform offers a fully responsive design, ensuring smooth interactions across diverse devices. The navigation bar adapts elegantly to varying screen dimensions, enhancing user experience.'],
            technologies: ['Frontend: HTML, CSS, JavaScript, React.js',
                'Database: Supabase',
                'Deployment: Netlify'],
            link: 'https://beamish-queijadas-5c97b1.netlify.app',
            github: 'https://github.com/Mela13076/Code-Path-Final-Project',
            duration: '3 weeks',
            challenges: 'A key hurdle I encountered was my initial unfamiliarity with CRUD operations. Through dedicated research and leveraging available resources, I quickly mastered these operations, enhancing my coding proficiency.',
        },
        {
            name: 'Interdimensional Archives: Exploring the Multiverse of Rick and Morty',
            gif: 'https://i.imgur.com/K08wT3A.gif',
            description: 'Step into the fascinating world of Rick and Morty with our interactive website, "Interdimensional Archives." Embark on an exciting journey through the vast multiverse of characters from the beloved animated series, where you can explore, sort, and discover intriguing details about each character.',
            features: [
                "Dynamic Character Table: Delve into a comprehensive table showcasing all the characters from the Rick and Morty universe. Use various filters to sort and find your favorite characters based on their attributes, status, and more.",
                "In-Depth Character Profiles: Select any character from the table to reveal a detailed profile, uncovering their origin, species, gender, and various other intriguing details. Get up close and personal with your beloved characters, learning more about their unique traits and quirks.",
                "Live Character Statistics: Our website provides real-time character statistics that dynamically update based on the selected filters. Observe how different filters affect the distribution of characters in various dimensions, including their living and deceased statuses.",
                "Multiverse Graph: Immerse yourself in an interactive graph that visualizes the locations of characters across the multiverse. Watch as the graph evolves with each filter selection, showcasing the distribution of living and deceased characters in different dimensions."
            ],
            technologies: ['Frontend: HTML, CSS, JavaScript, React.js',
            'API: Rick and Morty API'],
            link: 'Not hosted',
            github: 'https://github.com/Mela13076/project-5',
            duration: '2 weeks',
            challenges: 'The primary challenge I encountered while coding this project revolved around working with APIs. This marked my inaugural experience integrating an API into a website.',
        },
        
    ]

    

    return(
        <div className="projects-page">
            <h1 className="page-header"> Projects</h1>
            <h3 className="githubLink">To view more projects visit my <i><a href="https://github.com/Mela13076"><span className="neon-text">GitHub Page!</span></a></i></h3>
            {projectData.map((item, index) => (
                <ProjectComponet key={index} {...item} />
            ))}
        </div>
    )
}

export default Projects


// {
        //     name: 'Pokemon API Sorting',
        //     gif: 'https://i.imgur.com/WLEOehQ.gif',
        //     description: '',
        //     features: '',
        //     technologies: ['',],
        //     link: '',
        //     github: '',
        //     duration: '',
        //     challenges: '',
        // },