import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));


function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <nav className="navbar">
            <NavLink to="/" end className="nav-link">About</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/skills" className="nav-link">Skills</NavLink>
            <NavLink to="/resume" className="nav-link">Resume</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
             
            </Routes>
          </Suspense>
        </main>

        <footer className="footer">
          <p>&copy; 2025 Swati's Portfolio</p>
          <div className="social-icons">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
