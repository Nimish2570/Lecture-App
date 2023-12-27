import React from 'react';
import './Description.css'; // Import your CSS file

const Description = ({ video }) => {
  return (
    <div className="description-container">
      <p className="video-title">{video.title}</p>
      <p className="video-description">{video.Description}</p>
    </div>
  );
};

export default Description;
