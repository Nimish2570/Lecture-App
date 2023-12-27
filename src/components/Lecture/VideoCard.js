import React from 'react';
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <div className="thumbnail">
        <img src={video.thumbnailUrl} alt={video.title} />
      </div>
      <div className="details">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-description">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
