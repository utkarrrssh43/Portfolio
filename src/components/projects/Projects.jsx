import { useRef, useState } from "react";

import {
  FaArrowRight,
  FaArrowLeft,
  FaReact,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiTensorflow,
  SiOpencv,
  SiTailwindcss,
} from "react-icons/si";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import "../../styles/projects.css";

const Projects = () => {
  const scrollRef = useRef(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Software Asset Management",

      description:
        "Full stack web app to track software licenses and send expiry reminders with reports.",

      details:
        "A full stack web application designed to help organizations manage software assets, monitor licenses, and keep track of important software-related information.",

      features: [
        "Software license tracking",
        "Expiry reminder management",
        "Software asset monitoring",
        "Reports and information management",
      ],

      learned:
        "This project helped strengthen my full stack development skills and experience working with React, Node.js, and PostgreSQL.",

      tags: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
      ],

      liveUrl: "",
      githubUrl: "",

      duration: "Full Stack",
      type: "Internship Project",
      status: "Completed",
    },

    {
      title: "ClientDESK",

      description:
        "AI-native email client with smart categorization, automation and productivity tools.",

      details:
        "An AI-native email client focused on improving email organization and productivity through intelligent categorization, automation, and productivity-oriented features.",

      features: [
        "Smart email categorization",
        "AI-powered productivity features",
        "Email automation",
        "Organized email management",
      ],

      learned:
        "This project provided experience with modern frontend development, TypeScript, and integrating AI-oriented functionality into a web application.",

      tags: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: null, name: "AI" },
      ],

      liveUrl: "",
      githubUrl: "",

      duration: "AI / Full Stack",
      type: "Personal Project",
      status: "Completed",
    },

    {
      title: "Steel Defect Detection",

      description:
        "Deep learning model to classify steel surface defects with high accuracy.",

      details:
        "A computer vision and deep learning project focused on automatically identifying and classifying defects present on steel surfaces.",

      features: [
        "Steel surface defect classification",
        "Image-based defect detection",
        "Deep learning model development",
        "Computer vision processing",
      ],

      learned:
        "This project strengthened my understanding of Python, deep learning, image processing, and computer vision workflows.",

      tags: [
        { icon: <SiPython />, name: "Python" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiOpencv />, name: "OpenCV" },
      ],

      liveUrl: "",
      githubUrl: "",

      duration: "Machine Learning",
      type: "Internship Project",
      status: "Completed",
    },

    {
      title: "Expense Tracker",

      description:
        "Full-stack web app to track personal expenses, categorize spending, and generate automated visual budget reports.",

      details:
        "A full stack expense management application designed to help users record personal expenses, organize spending into categories, and understand their financial activity through visual reports.",

      features: [
        "Personal expense tracking",
        "Expense categorization",
        "Budget monitoring",
        "Visual financial reports",
      ],

      learned:
        "This project improved my understanding of full stack application development, data management, and building interfaces around financial information.",

      tags: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],

      liveUrl: "",
      githubUrl: "",

      duration: "Full Stack",
      type: "Personal Project",
      status: "Completed",
    },

    {
      title: "Portfolio Website",

      description:
        "Personal portfolio website to showcase projects, skills and achievements.",

      details:
        "A modern personal portfolio website created to showcase my technical skills, projects, experience, and achievements through an interactive and responsive interface.",

      features: [
        "Responsive portfolio interface",
        "Project showcase",
        "Skills and technology section",
        "Experience and achievements sections",
        "Interactive UI elements",
      ],

      learned:
        "Building this portfolio improved my frontend development, responsive design, component architecture, and UI implementation skills.",

      tags: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],

      liveUrl: "",
      githubUrl: "",

      duration: "Frontend",
      type: "Personal Project",
      status: "In Progress",
    },
  ];

  const handleScroll = () => {
    const el = scrollRef.current;

    if (!el) return;

    setAtStart(el.scrollLeft <= 10);

    setAtEnd(
      el.scrollLeft + el.clientWidth >=
        el.scrollWidth - 10
    );
  };

  const scrollByCard = (direction) => {
    const el = scrollRef.current;

    if (!el) return;

    const card = el.querySelector(".project-card");

    if (!card) return;

    const cardWidth = card.offsetWidth + 24;

    el.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div className="projects-top">

        <div>
          <p className="section-tag">
            <span className="tag-dot">
              04 ·{" "}
            </span>
            Projects
          </p>

          <h2 className="projects-heading">
            Things{" "}
            <span className="experience__title-highlight">
              I've Built
            </span>
          </h2>
        </div>

        <a
          href="#all-projects"
          className="view-all-link"
        >
          View All Projects
          <FaArrowRight />
        </a>

      </div>

      <div className="projects-carousel-wrapper">

        {!atStart && (
          <button
            className="carousel-arrow left"
            onClick={() =>
              scrollByCard(-1)
            }
            aria-label="Scroll left"
          >
            <FaArrowLeft />
          </button>
        )}

        <div
          className="projects-track"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              onClick={() =>
                setSelectedProject(project)
              }
            />
          ))}
        </div>

        {!atEnd && (
          <button
            className="carousel-arrow right"
            onClick={() =>
              scrollByCard(1)
            }
            aria-label="Scroll right"
          >
            <FaArrowRight />
          </button>
        )}

      </div>

      {/* =================================
          PROJECT MODAL
      ================================= */}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}

    </section>
  );
};

export default Projects;