// import React, { useEffect, useState } from 'react';
// import './Projects.css';

// function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [newProject, setNewProject] = useState({ title: '', description: '' });

//   const fetchProjects = async () => {
//     const res = await fetch('http://localhost:8080/api/projects');
//     const data = await res.json();
//     setProjects(data);
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const handleChange = (e) => {
//     setNewProject({ ...newProject, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch('http://localhost:8080/api/projects', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newProject),
//     });
//     setNewProject({ title: '', description: '' });
//     fetchProjects();
//   };

//   const handleDelete = async (id) => {
//     await fetch(`http://localhost:8080/api/projects/${id}`, {
//       method: 'DELETE',
//     });
//     fetchProjects();
//   };

//   return (
//     <div className="projects-container">
//       <h2>My Projects</h2>
//       <form onSubmit={handleSubmit} className="project-form">
//         <input
//           type="text"
//           name="title"
//           value={newProject.title}
//           placeholder="Project Title"
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           value={newProject.description}
//           placeholder="Project Description"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Add Project</button>
//       </form>

//       <div className="projects-container">
//   {projects.map((proj) => (
//     <div key={proj.id} className="project-card">
//       <h3 className="project-title">{proj.name}</h3>
//       <p className="project-description">{proj.description}</p>
//       <div className="project-links">
//         <a href={proj.demoLink} target="_blank" rel="noreferrer" className="project-link">Demo</a>
//         <a href={proj.codeLink} target="_blank" rel="noreferrer" className="project-link">Code</a>
//       </div>
//     </div>
//   ))}
// </div>
//     </div>
//   );
// }

// export default Projects;


import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce App",
      image: process.env.PUBLIC_URL + "/assets/thumbnails/ecommerce.png",
      description: "Full-stack shopping cart app with payments and search filters."
    },
    {
      title: "Portfolio Site",
      image: process.env.PUBLIC_URL + "/assets/thumbnails/portfolio.png",
      description: "Responsive React-based portfolio showcasing my projects and skills."
    },
    {
      title: "Book Manager",
      image: process.env.PUBLIC_URL + "/assets/thumbnails/bookmanager.png",
      description: "CRUD book management app with Spring Boot backend and MySQL DB."
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img
              src={proj.image}
              alt={proj.title}
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/100?text=No+Image';
              }}
            />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
