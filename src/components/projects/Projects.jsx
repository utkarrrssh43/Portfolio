import { useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiTensorflow,
  SiOpencv,
  SiTailwindcss,
} from "react-icons/si";

import "../../styles/projects.css";

const Projects = () => {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const projects = [
    {
      title: "Software Asset Management",
      description:
        "Full stack web app to track software licenses and send expiry reminders with reports.",
      tags: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
      ],
    },
    {
      title: "ClientDESK",
      description:
        "AI-native email client with smart categorization, automation and productivity tools.",
      tags: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: null, name: "AI" },
      ],
    },
    {
      title: "Steel Defect Detection",
      description:
        "Deep learning model to classify steel surface defects with high accuracy.",
      tags: [
        { icon: <SiPython />, name: "Python" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiOpencv />, name: "OpenCV" },
      ],
    },
    {
      title: "Expense Tracker",
      description:
        "Full-stack web app to track personal expenses, categorize spending, and generate automated visual budget reports.",
      tags: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website to showcase projects, skills and achievements.",
      tags: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],
    },
  ];

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 10);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
  };

  const scrollByCard = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".project-card").offsetWidth + 24;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-top">
        <div>
          <p className="section-tag">
            <span className="tag-dot">04 · </span> Projects
          </p>
          <h2 className="projects-heading">Things I've Built</h2>
        </div>

        <a href="#all-projects" className="view-all-link">
          View All Projects <FaArrowRight />
        </a>
      </div>

      <div className="projects-carousel-wrapper">
        {!atStart && (
          <button
            className="carousel-arrow left"
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll left"
          >
            <FaArrowLeft />
          </button>
        )}

        <div className="projects-track" ref={scrollRef} onScroll={handleScroll}>
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div className="project-image-box">
                <span>Add image at /assets/project-{i + 1}.jpg</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span className="project-tag" key={idx}>
                    {tag.icon && <span className="tag-icon">{tag.icon}</span>}
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!atEnd && (
          <button
            className="carousel-arrow right"
            onClick={() => scrollByCard(1)}
            aria-label="Scroll right"
          >
            <FaArrowRight />
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
