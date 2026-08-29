import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiExpress,
  SiSpringboot,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

import "../../styles/skills.css";

const Skills = () => {
  const languages = [
    { icon: <FaJava />, name: "Java", color: "#e11d48" },
    { icon: <FaPython />, name: "Python", color: "#3776ab" },
    { icon: <SiCplusplus />, name: "C++", color: "#004482" },
    { icon: <SiC />, name: "C", color: "#a8b9cc" },
  ];

  const tools = [
    { icon: <FaReact />, name: "React", color: "#61dafb" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#3c873a" },
    { icon: <SiExpress />, name: "Express", color: "#ffffff" },
    { icon: <SiSpringboot />, name: "Spring Boot", color: "#6db33f" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
    { icon: <FaDocker />, name: "Docker", color: "#2496ed" },
    { icon: <FaAws />, name: "AWS", color: "#ff9900" },
    { icon: <FaGitAlt />, name: "Git", color: "#f05032" },
  ];

  const proficiency = [
    { label: "DSA & Algorithms", value: 90 },
    { label: "Full Stack Development", value: 80 },
    { label: "React / Next.js", value: 80 },
    { label: "Node.js / Express", value: 75 },
    { label: "SQL / Databases", value: 85 },
    { label: "AI / ML (Python)", value: 70 },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-top">
        <p className="section-tag">
          <span className="tag-dot">03 · </span> Skills
        </p>
        {/* <div className="skills-badge-icon">A</div> */}
      </div>

      <h2 className="skills-heading">
        Technologies{" "}
        <span className="experience__title-highlight">I work with</span>
      </h2>

      <div className="skills-content">
        <div className="skills-left">
          <div className="skill-card">
            <h3 className="skill-card-title">Languages</h3>
            <div className="icon-grid">
              {languages.map((item, i) => (
                <div className="icon-item" key={i}>
                  <span className="icon" style={{ color: item.color }}>
                    {item.icon}
                  </span>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3 className="skill-card-title">Tools & Frameworks</h3>
            <div className="icon-grid">
              {tools.map((item, i) => (
                <div className="icon-item" key={i}>
                  <span className="icon" style={{ color: item.color }}>
                    {item.icon}
                  </span>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-right">
          <div className="proficiency-card">
            <h3 className="skill-card-title">Proficiency</h3>

            <div className="proficiency-list">
              {proficiency.map((item, i) => (
                <div className="proficiency-row" key={i}>
                  <div className="proficiency-labels">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
