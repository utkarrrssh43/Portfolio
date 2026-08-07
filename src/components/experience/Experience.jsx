import "../../styles/Experience.css";

const EXPERIENCES = [
  {
    id: "rkfl-license-reminder",
    variant: "meta", // uses the calendar/role/stack meta rows
    logoLabel: "R",
    title: "RKFL Software License Expiry Reminder",
    type: "Full Stack Web Application •  PERN Stack",
    description:
      "A company-level web application to track software licenses and get expiry reminders within selected ranges. Helps reduce compliance risks and ensures timely renewals.",
    meta: [
      { icon: "calendar", label: "Duration", value: "May 2026 – Jun 2026" },
      { icon: "role", label: "Role", value: "Full Stack Developer" },
      {
        icon: "stack",
        label: "Tech Stack",
        value: "React.js, Node.js, Express.js, PostgreSQL",
      },
    ],
    features: [
      "Software master entry and management",
      "License expiry reminder with custom ranges",
      "Dashboard with summary cards and charts",
      "Role-based login with owner code filtering",
      "Export reports to Excel & PDF",
      "Secure REST APIs with authentication",
    ],
    technologies: [
      { label: "React", color: "#61dafb" },
      { label: "Node.js", color: "#8cc84b" },
      { label: "Express.js", color: "#f5f5f5" },
      { label: "PostgreSQL", color: "#6ea8ff" },
      { label: "Axios", color: "#a76bff" },
      { label: "Chart.js", color: "#ff8a5c" },
      { label: "PDFKit", color: "#ff5c5c" },
    ],
  },
  {
    id: "tata-steel-defect-detection",
    variant: "meta", // uses the calendar/role/stack meta rows, same as RKFL
    logoLabel: "T",
    title: "Tata Steel Defect Detection Analyzer",
    type: "Deep Learning • Computer Vision",
    description:
      "Automated steel quality inspection by developing a TensorFlow CNN that detects and classifies surface defects.",
    meta: [
      { icon: "calendar", label: "Duration", value: "Apr 2026 – Jun 2026" },
      { icon: "role", label: "Role", value: "AI/ML Intern" },
      {
        icon: "stack",
        label: "Tech Stack",
        value: "Python, TensorFlow, OpenCV",
      },
    ],
    // Placeholder — swap these for your actual project highlights.
    features: [
      "Multi-class defect classification with a CNN",
      "Image preprocessing & data augmentation pipeline",
      "Model evaluation with precision, recall & F1-score",
      "Visualized predictions against sample steel images",
      "Trained and validated on the Severstal dataset",
      "Assists quality inspection and cuts manual review time",
    ],
    technologies: [
      { label: "Python", color: "#f2c94c" },
      { label: "TensorFlow", color: "#ff8a5c" },
      { label: "Keras", color: "#e25858" },
      { label: "OpenCV", color: "#61dafb" },
      { label: "NumPy", color: "#7db2ff" },
      { label: "Pandas", color: "#8cc84b" },
    ],
  },
];

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path strokeLinecap="round" d="M3.5 9.5h17M8 3v3.4M16 3v3.4" />
  </svg>
);

const RoleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="8" r="3.4" />
    <path strokeLinecap="round" d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6" />
  </svg>
);

const StackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5"
    />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5 12.5 4.2 4.2L19 7"
    />
  </svg>
);

const META_ICONS = {
  calendar: CalendarIcon,
  role: RoleIcon,
  stack: StackIcon,
};

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <div className="experience__header">
          <span className="experience__eyebrow">
            <p className="section-tag">
              <span className="tag-dot">05 · </span> EXPERIENCE
            </p>{" "}
          </span>
          <h2 className="experience__title">
            My <span className="experience__title-highlight">experience</span>
          </h2>
          <p className="experience__subtitle">
            Hands-on experience in building full-stack applications that solve
            real-world business problems. Below is my recent project work.
          </p>
        </div>

        <div className="experience-grid">
          {EXPERIENCES.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <div className="experience-card__main">
                <div className="experience-card__heading">
                  <div className="experience-card__logo" aria-hidden="true">
                    {exp.logoLabel}
                  </div>
                  <div>
                    <h3 className="experience-card__project">{exp.title}</h3>
                    <p className="experience-card__type">{exp.type}</p>
                  </div>
                </div>

                <p className="experience-card__desc">{exp.description}</p>

                <hr className="experience-card__divider" />

                {exp.variant === "meta" && (
                  <div className="experience-card__meta">
                    {exp.meta.map((item) => {
                      const Icon = META_ICONS[item.icon];
                      return (
                        <div className="meta-item" key={item.label}>
                          <span className="meta-item__icon">
                            <Icon />
                          </span>
                          <div>
                            <p className="meta-item__label">{item.label}</p>
                            <p className="meta-item__value">{item.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {exp.variant === "specs" && (
                  <div className="experience-card__specs">
                    {exp.specs.map((spec) => (
                      <div className="specs-row" key={spec.label}>
                        <span className="specs-row__label">{spec.label}</span>
                        <span className="specs-row__value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="experience-card__features">
                <h4 className="features__title">
                  <span className="features__dot" aria-hidden="true" />
                  Key Features
                </h4>
                <ul className="features__list">
                  {exp.features.map((feature) => (
                    <li key={feature}>
                      <span className="features__check">
                        <CheckIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="experience-card__tech">
                <p className="tech__label">
                  Technologies Used
                  <span className="tech__label-dot" aria-hidden="true" />
                </p>
                <div className="tech__chips">
                  {exp.technologies.map((tech) => (
                    <span className="tech-chip" key={tech.label}>
                      <span
                        className="tech-chip__dot"
                        style={{ background: tech.color }}
                        aria-hidden="true"
                      />
                      {tech.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
