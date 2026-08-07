import React from "react";

const ProjectCard = ({ project, onOpen }) => {
  return (
    <div
      className="project-card"
      onClick={() => onOpen(project)}
    >
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="tech-stack">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div
        className="project-links"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;