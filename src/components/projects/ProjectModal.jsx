import { useEffect } from "react";
import { FaArrowRight, FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="project-modal-overlay"
      onMouseDown={handleBackdropClick}
    >
      <div className="project-modal">

        {/* Close button */}
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <FaTimes />
        </button>

        {/* =================================
            TOP SECTION
        ================================= */}

        <div className="project-modal-top">

          {/* Project image */}
          <div className="project-modal-image">
            <span>
              add project image
            </span>
          </div>

          {/* Project information */}
          <div className="project-modal-intro">

            <p className="project-modal-label">
              <span>✦</span> Featured Project
            </p>

            <h2>{project.title}</h2>

            <p className="project-modal-description">
              {project.description}
            </p>

            {/* Technology tags */}
            <div className="project-modal-tags">
              {project.tags.map((tag, index) => (
                <span
                  className="project-modal-tag"
                  key={index}
                >
                  {tag.icon && (
                    <span className="project-modal-tag-icon">
                      {tag.icon}
                    </span>
                  )}

                  {tag.name}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="project-modal-actions">

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-btn project-modal-btn-primary"
                >
                  Visit Live
                  <FaExternalLinkAlt />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-btn project-modal-btn-secondary"
                >
                  View Code
                  <FaGithub />
                </a>
              )}

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="project-modal-divider" />

        {/* =================================
            DETAILS
        ================================= */}

        <div className="project-modal-details">

          {/* About */}
          <div className="project-modal-column">

            <div className="project-modal-section">
              <div className="project-modal-section-title">
                <span className="project-modal-section-icon">
                  ◈
                </span>

                <h3>About the Project</h3>
              </div>

              <p>
                {project.details || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features?.length > 0 && (
              <div className="project-modal-section">

                <div className="project-modal-section-title">
                  <span className="project-modal-section-icon">
                    ✓
                  </span>

                  <h3>Key Features</h3>
                </div>

                <ul className="project-modal-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            )}

          </div>

          {/* Tech + Learning */}
          <div className="project-modal-column">

            <div className="project-modal-section">

              <div className="project-modal-section-title">
                <span className="project-modal-section-icon">
                  ◇
                </span>

                <h3>Tech Stack</h3>
              </div>

              <ul className="project-modal-list">
                {project.tags.map((tag, index) => (
                  <li key={index}>
                    {tag.name}
                  </li>
                ))}
              </ul>

            </div>

            {project.learned && (
              <div className="project-modal-section">

                <div className="project-modal-section-title">
                  <span className="project-modal-section-icon">
                    ♧
                  </span>

                  <h3>What I Learned</h3>
                </div>

                <p>
                  {project.learned}
                </p>

              </div>
            )}

          </div>
        </div>

        {/* =================================
            FOOTER
        ================================= */}

        <div className="project-modal-divider" />

        <div className="project-modal-footer">

          <div>
            <span className="project-modal-footer-icon">
              ◷
            </span>
            <span>{project.duration || "Project"}</span>
          </div>

          <div>
            <span className="project-modal-footer-icon">
              ◈
            </span>
            <span>{project.type || "Personal Project"}</span>
          </div>

          <div>
            <span className="project-modal-footer-icon">
              ◆
            </span>
            <span>{project.status || "Completed"}</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;