import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div className="section home">
    <h1 className="header">Welcome to My Portfolio</h1>
    <p className="intro">Hi, I'm Akash Manhas, a devops, prompt engineer and good with most of the web development. Explore my work and get to know me better.</p>
  </div>
);

const About = () => (
  <div className="section about">
    <h1 className="header">About Me</h1>
    <p className="content">Here's some information about me. I'm passionate about [Your Interests] and have experience in [Your Skills].</p>
  </div>
);

const Projects = () => (
  <div className="section projects">
    <h1 className="header">My Projects</h1>
    <ul className="project-list">
      <li><a href="/" target="_blank" rel="noopener noreferrer">Project 1</a>: A brief description of Project 1.</li>
      <li><a href="/" target="_blank" rel="noopener noreferrer">Project 2</a>: A brief description of Project 2.</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="section contact">
    <h1 className="header">Contact Me</h1>
    <form className="contact-form">
      <label>
        Name:
        <input type="text" name="name" className="input-field" />
      </label>
      <label>
        Message:
        <textarea name="message" className="input-field" />
      </label>
      <button type="submit" className="submit-button">Send</button>
    </form>
  </div>
);

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
