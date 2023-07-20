

// function CertificateComponet(props){

//     const{title, image, description, buttonName} = props;

//     return(
//         <div className="certificate">
//             <h2 className="certTitle">{title}</h2>
//             <img src={image} alt="certificate" className="certImage" height='400px'/>
//             <p className="certDescription">{description}</p>
//             {/* <button>{buttonName}</button> */}
//         </div>
//     )
// }

// export default CertificateComponet


import React, { useState } from 'react';

function CertificateComponet(props) {
  const { title, image, description } = props;
  const [showLightbox, setShowLightbox] = useState(false);

  const handleThumbnailClick = () => {
    setShowLightbox(true);
  };

  const handleCloseLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <div className="certificate">
      <h2 className="certTitle">{title}</h2>
      <img
        src={image}
        alt="certificate"
        className="certImage"
        width="80%"
        onClick={handleThumbnailClick}
      />
      <p className="certDescription">{description}</p>
      {showLightbox && (
        <div className="lightbox-overlay" onClick={handleCloseLightbox}>
          <img
            className="full-image"
            src={image} // Use the same image for the lightbox
            alt="certificate"
            height="80%" // Adjust the height as needed
          />
        </div>
      )}
    </div>
  );
}

export default CertificateComponet;
