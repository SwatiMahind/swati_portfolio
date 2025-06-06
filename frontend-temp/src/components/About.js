import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <img
        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
        alt="Developer profile"
        className="about-image"
      />
      <p>
        Hello! I'm Swati, a full-stack web developer passionate about building web apps using React,
        Spring Boot, and MySQL. I love learning new technologies and creating efficient, scalable solutions.
      </p>
    </div>
  );
};

export default About;
