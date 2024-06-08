import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-label">Projects</div>
      <div className="container">
        <div className="project-list">
          <div className="project">
            <h3>Project One</h3>
            <p>This is a description of project one. It showcases my skills in web development and design.</p>
          </div>
          <div className="project">
            <h3>Project Two</h3>
            <p>This is a description of project two. It highlights my ability to build complex applications.</p>
          </div>
          <div className="project">
            <h3>Project Three</h3>
            <p>This is a description of project three. It demonstrates my proficiency in React and JavaScript.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
