import React from 'react';
import './VideoHero.css';
import video from '../../../../public/video.mp4';

const VideoHero = () => {
  return (
    <section className="video-hero">
      <video 
        autoPlay 
        muted 
        loop 
        className="background-video"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoHero;