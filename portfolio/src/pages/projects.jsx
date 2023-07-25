import ProjectComponet from "../componets/projectComponet"


function Projects(){

    const projectData = [
        {
            name: '',
            gif: 'https://i.imgur.com/ueDthJl.gif',
            description: '',
        },
        {
            name: '',
            gif: '',
            description: '',
        },
        {
            name: '',
            gif: '',
            description: '',
        },
    ]

    return(
        <div className="projects-page">
            <h1 className="page-header"> Projects</h1>
            {projectData.map((item, index) => (
                <ProjectComponet key={index} {...item} />
            ))}
        </div>
    )
}

export default Projects


