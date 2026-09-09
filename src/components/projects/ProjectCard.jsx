// import { FaArrowRight } from "react-icons/fa";

// import project1 from "../../assets/project-1.png";
// import project2 from "../../assets/project-2.png";
// import project3 from "../../assets/project-3.png";

// const projectImages = [project1, project2, project3];

// const ProjectCard = ({ project, index, onClick }) => {
//   return (
//     <div
//       className="project-card"
//       onClick={onClick}
//       role="button"
//       tabIndex={0}
//       onKeyDown={(e) => {
//         if (e.key === "Enter" || e.key === " ") {
//           onClick();
//         }
//       }}
//     >
//       {/* PROJECT IMAGE */}
//       <div className="project-image-box">
//         <img
//           src={projectImages[index]}
//           alt={project.title}
//           className="project-image"
//         />
//       </div>

//       {/* PROJECT TITLE */}
//       <h3 className="project-title">{project.title}</h3>

//       {/* DESCRIPTION */}
//       <p className="project-description">{project.description}</p>

//       {/* TAGS */}
//       <div className="project-tags">
//         {project.tags.map((tag, idx) => (
//           <span className="project-tag" key={idx}>
//             {tag.icon && <span className="tag-icon">{tag.icon}</span>}

//             {tag.name}
//           </span>
//         ))}
//       </div>

//       {/* BUTTON */}
//       <button
//         className="project-view-details"
//         onClick={(e) => {
//           e.stopPropagation();
//           onClick();
//         }}
//       >
//         View Details
//         <FaArrowRight />
//       </button>
//     </div>
//   );
// };

// export default ProjectCard;

import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";

import "../../styles/projects.css";

const projectImages = [project1, project2, project3];

const ProjectCard = ({ project, index, onClick }) => {
  const cardRef = useRef(null);

  // Track the pointer position relative to this card only, so the glow
  // stays local to whichever card is being hovered (no global listener).
  const handlePointerMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  };

  return (
    <div
      className="project-card"
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      {/* glow layers — purely decorative, sit behind the real content */}
      <span className="project-card-spot" aria-hidden="true" />
      <span className="project-card-border-glow" aria-hidden="true" />

      <div className="project-card-content">
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
    </div>
  );
};

export default ProjectCard;
