import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="project-modal">
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>{project.title}</h2>

        <h3>Problem Statement</h3>
        <p>{project.problemStatement}</p>

        <h3>Features</h3>
        <ul>
          {project.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Tech Stack</h3>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <h3>Challenges</h3>
        <ul>
          {project.challenges.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Learnings</h3>
        <ul>
          {project.learnings.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="modal-github"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;