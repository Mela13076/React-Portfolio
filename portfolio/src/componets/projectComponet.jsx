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
        
        <li><b>{firstPart}</b> {restPart}</li>
      );
    } else {
      return <p>{text}</p>;
    }
  };

    return(
        <div className="projects">
            <h2 className="projectName"><i>{name}</i></h2>
            <p className="projectDescription">{description}</p>
            <img src={gif} alt="project" className="projectGif" height='400px' onClick={handleThumbnailClick}/>
            
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
                <h3>Features</h3>
                <p>
                  {features.map((detail, index) => (
                    // <li key={index}>{detail}</li>
                    <div key={index}>{formatFeatureText(detail)}</div>
                  ))}
                </p>
              </div>
            )}
            {technologies.length > 0 && (
              <div className="projectTechnologies">
                <h3>Technologies</h3>
                <p>
                  {technologies.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </p>
              
              </div>
            )}

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
