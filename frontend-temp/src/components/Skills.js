import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
  { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
  { name: 'Bootstrap', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png' },
  { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
  { name: 'SQL', icon: 'https://cdn-icons-png.flaticon.com/512/4299/4299956.png' },
  { name: 'C', icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png' },
  { name: 'C++', icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
  { name: 'MS Office', icon: 'https://cdn-icons-png.flaticon.com/512/732/732221.png' },
  { name: 'MS Excel', icon: 'https://cdn-icons-png.flaticon.com/512/732/732220.png' },
  { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
  { name: 'Spring Boot', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
  { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
  { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/528/528260.png' },
  { name: 'VS Code', icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
  { name: 'Postman', icon: 'https://cdn.iconscout.com/icon/free/png-256/postman-3521648-2945092.png' },
  { name: 'IntelliJ IDEA', icon: 'https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png' },
  { name: 'Netlify', icon: 'https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png' },
  { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico' }
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
