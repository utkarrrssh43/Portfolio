import { FaArrowRight } from "react-icons/fa";

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
      <div className="project-image-box">
        <span>add image at /assets/project-{index + 1}.jpg</span>
      </div>

      <h3 className="project-title">{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-tags">
        {project.tags.map((tag, idx) => (
          <span className="project-tag" key={idx}>
            {tag.icon && (
              <span className="tag-icon">
                {tag.icon}
              </span>
            )}
            {tag.name}
          </span>
        ))}
      </div>

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