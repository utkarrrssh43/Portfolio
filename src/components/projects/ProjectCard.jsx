import { FaArrowRight } from "react-icons/fa";

import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";

const projectImages = [project1, project2, project3];

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <div
      className="project-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      {/* PROJECT IMAGE */}
      <div className="project-image-box">
        <img
          src={projectImages[index]}
          alt={project.title}
          className="project-image"
        />
      </div>

      {/* PROJECT TITLE */}
      <h3 className="project-title">{project.title}</h3>

      {/* DESCRIPTION */}
      <p className="project-description">{project.description}</p>

      {/* TAGS */}
      <div className="project-tags">
        {project.tags.map((tag, idx) => (
          <span className="project-tag" key={idx}>
            {tag.icon && <span className="tag-icon">{tag.icon}</span>}

            {tag.name}
          </span>
        ))}
      </div>

      {/* BUTTON */}
      <button
        className="project-view-details"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        View Details
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ProjectCard;
