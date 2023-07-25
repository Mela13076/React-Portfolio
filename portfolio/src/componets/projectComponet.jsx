import React, { useState } from 'react';

function ProjectComponet(props){

    const{name, gif, description} = props;
    const [showLightbox, setShowLightbox] = useState(false);

  const handleThumbnailClick = () => {
    setShowLightbox(true);
  };

  const handleCloseLightbox = () => {
    setShowLightbox(false);
  };

    return(
        <div className="projects">
            <h2 className="projectName">{name}</h2>
            <img src={gif} alt="project" className="projectGif" height='400px' onClick={handleThumbnailClick}/>
            <p className="projectDescription">{description}</p>
            {showLightbox && (
                <div className="lightbox-overlay" onClick={handleCloseLightbox}>
                <img
                    className="full-image"
                    src={gif} // Use the same image for the lightbox
                    alt="project video"
                    height="80%" // Adjust the height as needed
                />
                </div>
            )}
        </div>
    )
}

export default ProjectComponet