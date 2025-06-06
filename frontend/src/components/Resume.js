import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <p>You can download my resume below:</p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
