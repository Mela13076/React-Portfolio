import React, { useState } from 'react';

function ProjectComponet(props){

    const{name, gif, description, features, technologies, link, github, duration, challenges} = props;
    const [showLightbox, setShowLightbox] = useState(false);

    

  const handleThumbnailClick = () => {
    setShowLightbox(true);
  };

  const handleCloseLightbox = () => {
    setShowLightbox(false);
  };

  const formatFeatureText = (text) => {
    const colonIndex = text.indexOf(':');
    if (colonIndex !== -1) {
      const firstPart = text.slice(0, colonIndex + 1);
      const restPart = text.slice(colonIndex + 1);
      return (
        
        <p className='features'><i><b>{firstPart}</b></i> {restPart}</p>
      );
    } else {
      return <p>{text}</p>;
    }
  };

    return(
        <div className="projects">
            <h2 className="projectName neon-text-blue"><i>{name}</i></h2>
            <p className="projectDescription">{description}</p>
            <img src={gif} alt="project" className="projectGif"  onClick={handleThumbnailClick}/>
            
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
            {features.length > 0 && (
              <div className="projectFeatures">
                <h3 className='neon-text-blue'>Features</h3>
                  <ul>
                    {features.map((detail, index) => (
                    // <li key={index}>{detail}</li>
                    <li key={index} >{formatFeatureText(detail)}</li>
                  ))}
                  </ul>
                  
                
                  
                
              </div>
            )}
            {technologies.length > 0 && (
              <div className="projectTechnologies">
                <h3 className='neon-text-blue'>Technologies</h3>
                <ul>
                  {technologies.map((detail, index) => (
                    <li key={index}>{formatFeatureText(detail)}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="challenges">
              <h3 className="neon-text-blue">Challenges Faced</h3>
              <p>{challenges}</p>
            </div>

            <h3 className="neon-text-blue">Duration of Project:</h3>
            <p>{duration}</p>

            <h3 className='neon-text-blue'>Links to Project </h3>
             
            <div className="link-btn">
               {link.length > 0 &&(
                <a href={link} className='links'> See Project!</a>
              )}
              <a href={github} className='links'>Github Code</a>
            </div>
            
            

        </div>
    )
}

export default ProjectComponet

// import React, { useState } from 'react';

// function ProjectComponent(props) {
//   const { name, images, description, features, technologies, link, github, duration, challenges } = props;
//   const [showLightbox, setShowLightbox] = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);

//   const handleThumbnailClick = (index) => {
//     setShowLightbox(true);
//     setLightboxIndex(index);
//   };

//   const handleCloseLightbox = () => {
//     setShowLightbox(false);
//   };

//   const handlePrevImage = () => {
//     setLightboxIndex((prevIndex) => (prevIndex === 0 ? features.length - 1 : prevIndex - 1));
//   };

//   const handleNextImage = () => {
//     setLightboxIndex((prevIndex) => (prevIndex === features.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="projects">
//       <h2 className="projectName"><i>{name}</i></h2>
//       {features.map((detail, index) => (
//         <div key={index}>
//           <p>{detail}</p>
//         </div>
//       ))}
//       <button onClick={() => handleThumbnailClick(0)}>View Lightbox</button>
//       {showLightbox && (
//         <div className="lightbox-overlay" onClick={handleCloseLightbox}>
//           <button className="prev-button" onClick={handlePrevImage}>&lt;</button>
//           <img
//             className="lightbox-image"
//             src={images[lightboxIndex]} // Use the lightbox image
//             alt="project image"
//             width= '100%'
//           />
//           <button className="next-button" onClick={handleNextImage}>&gt;</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProjectComponent;
