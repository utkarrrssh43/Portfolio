import "../../styles/Achievements.css";

/* ---------- icons ---------- */

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 4h10v4a5 5 0 0 1-10 0V4Z"
    />
    <path
      strokeLinecap="round"
      d="M7 5H4.5A1.5 1.5 0 0 0 3 6.5v.5c0 1.66 1.5 3 3.4 3M17 5h2.5A1.5 1.5 0 0 1 21 6.5v.5c0 1.66-1.5 3-3.4 3"
    />
    <path
      strokeLinecap="round"
      d="M12 13v3M9 20h6M9.5 20c0-2 .8-3 2.5-4 1.7 1 2.5 2 2.5 4"
    />
  </svg>
);

const CapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 10.8v4.3c0 1.5 2.5 2.7 5.5 2.7s5.5-1.2 5.5-2.7v-4.3M21 8.5v6"
    />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5"
    />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    <path strokeLinecap="round" d="m17.5 6.5 2-2" />
  </svg>
);

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15c3.5-1.5 6-5 6-10 0 0-5 .5-8.5 4S5.5 17.5 5.5 17.5 9 16.5 12 15Z"
    />
    <circle cx="13" cy="9" r="1.4" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 15.5c-1.6.4-2.7 1.6-3 4 2.4-.3 3.6-1.4 4-3M14 3.5c1.7-.2 3 .1 4 .8"
    />
  </svg>
);

const LaptopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="5" y="5" width="14" height="9.5" rx="1.4" />
    <path strokeLinecap="round" d="M3 18.5h18" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 4.2A2.6 2.6 0 0 0 7 6.8c-1.5.2-2.6 1.5-2.6 3 0 .6.2 1.2.5 1.7A2.7 2.7 0 0 0 4 13.9c0 1.2.8 2.2 1.9 2.6-.1.3-.1.6-.1.9a2.7 2.7 0 0 0 2.7 2.7c.4 0 .8-.1 1.1-.3.4.7 1.2 1.2 2.1 1.2V6.6c0-1.3-1-2.4-2.2-2.4Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 4.2a2.6 2.6 0 0 1 2.5 2.6c1.5.2 2.6 1.5 2.6 3 0 .6-.2 1.2-.5 1.7a2.7 2.7 0 0 1 .9 2.4c0 1.2-.8 2.2-1.9 2.6.1.3.1.6.1.9a2.7 2.7 0 0 1-2.7 2.7c-.4 0-.8-.1-1.1-.3-.4.7-1.2 1.2-2.1 1.2V6.6c0-1.3 1-2.4 2.2-2.4Z"
    />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3.5" y="7.5" width="17" height="11" rx="2" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 7.5v-2A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5v2M3.5 12.5h17"
    />
  </svg>
);

const GrowthIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 18 9.5 12l3.5 3.5L20 8"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 8H20v5.5" />
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path
      strokeLinecap="round"
      d="M8.5 15.5c-2 1 0 2.3 3 2.3 3.6 0 5.7-1 5.7-2.2 0-.9-1.2-1.4-2.1-1.6"
    />
    <path
      strokeLinecap="round"
      d="M10.5 3.5c-2 2 3 3-.3 6M9.8 18.7c-3.4.3-3.4 1.7 0 2 3.6.3 8-.2 8-1.7 0-.7-1-1.1-1.9-1.3"
    />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3.5c-3 0-3.3 1.3-3.3 2.9v2h6.6v1H7.4C5.6 9.4 4 9.9 4 13.1s1.6 3.7 3.4 3.7h1.3v-2.3c0-2 1.7-3.7 3.7-3.7h4.2c1.7 0 3-1.4 3-3v-1c0-2.7-2.3-3.3-4.6-3.3H12Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.5c3 0 3.3-1.3 3.3-2.9v-2H8.7v-1h7.9c1.8 0 3.4-.5 3.4-3.7s-1.6-3.7-3.4-3.7h-1.3v2.3c0 2-1.7 3.7-3.7 3.7H7.4c-1.7 0-3 1.4-3 3v1c0 2.7 2.3 3.3 4.6 3.3H12Z"
    />
  </svg>
);

const AwsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 15.5c4 2.2 12 2.2 16 0M3 18c5.5 2.8 12.5 2.8 18 0"
    />
    <path
      strokeLinecap="round"
      d="M7 11V6.5a2 2 0 0 1 4 0V11M7 9.5h4M13 11l3-6 3 6M13.7 9.5h4.6"
    />
  </svg>
);

const ChartTrendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 20V10M9.5 20V4M15 20v-7M20 20v-4"
    />
  </svg>
);

/* ---------- data ---------- */

const STATS = [
  {
    icon: TrophyIcon,
    accent: "violet",
    value: "450+",
    label: "DSA Problems Solved",
    sub: "Across LeetCode & GFG and more",
  },
  {
    icon: CapIcon,
    accent: "blue",
    value: "8.68 / 10",
    label: "CGPA in B.Tech CSE",
    sub: "Consistent 8.5+ SGPA",
  },
  {
    icon: CodeIcon,
    accent: "blue",
    value: "5+",
    label: "Projects Completed",
    sub: "Web, Full Stack & AI/ML",
  },
  {
    icon: TargetIcon,
    accent: "blue",
    value: "Top 20%",
    label: "Academic Performance",
    sub: "Among CSE Batchmates",
  },
];

const MILESTONES = [
  {
    icon: RocketIcon,
    date: "Aug 2023",
    title: "Started My Journey",
    desc: "Began B.Tech in CSE at KIIT University with a goal to become a skilled software engineer.",
  },
  {
    icon: CodeIcon,
    date: "Nov 2023",
    title: "DSA Kickstart",
    desc: "Started solving problems consistently and built a strong foundation in Data Structures & Algorithms.",
  },
  {
    icon: LaptopIcon,
    date: "Apr 2025",
    title: "First Full Stack Project",
    desc: "Built my first full stack web application using MERN stack and gained hands-on development experience.",
  },
  {
    icon: BrainIcon,
    date: "Jan 2026",
    title: "AI/ML Exploration",
    desc: "Explored Machine Learning with Python and completed projects including Steel Defect Detection using TensorFlow.",
  },
  {
    icon: BriefcaseIcon,
    date: "May 2026",
    title: "RKFL Project",
    desc: "Developed RKFL Software License Expiry Reminder (full stack) with role-based login, dashboards, and reports.",
  },
  {
    icon: GrowthIcon,
    date: "Aug 2026",
    title: "Continuous Growth",
    desc: "Continuing to learn, build, and improve every day to create impactful solutions and achieve bigger goals.",
  },
];

const CERTIFICATIONS = [
  {
    icon: JavaIcon,
    color: "#e58a2a",
    title: "Java Programming",
    provider: "(Infosys Springboard)",
  },
  {
    icon: CodeIcon,
    color: "#7db2ff",
    title: "DSA in Java",
    provider: "(Striver A2Z Sheet)",
  },
  {
    icon: ReactIcon,
    color: "#61dafb",
    title: "Web Development",
    provider: "(MERN Stack)",
  },
  {
    icon: PythonIcon,
    color: "#f2c94c",
    title: "Python for ML",
    provider: "(Various Platforms)",
  },
  {
    icon: AwsIcon,
    color: "#f5a623",
    title: "AWS Cloud Practitioner",
    provider: "(AWS)",
  },
  {
    icon: ChartTrendIcon,
    color: "#4ade80",
    title: "Data Analytics Tools",
    provider: "(Excel, Power BI)",
  },
];

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements__container">
        <div className="achievements__header">
          <span className="achievements__eyebrow">
            <p className="section-tag">
              <span className="tag-dot">06 · </span> ACHIEVEMENTS
            </p>{" "}
          </span>
          <h2 className="achievements__title">
            My{" "}
            <span className="achievements__title-highlight">achievements</span>
          </h2>
          <p className="achievements__subtitle">
            A few highlights from my journey so far. These achievements reflect
            my consistency, dedication, and passion for learning and building
            impactful solutions.
          </p>
        </div>

        <div className="achievements__top">
          <div className="stats-grid">
            {STATS.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span
                  className={`stat-card__icon stat-card__icon--${stat.accent}`}
                >
                  <stat.icon />
                </span>
                <p className="stat-card__value">{stat.value}</p>
                <p className="stat-card__label">{stat.label}</p>
                <p className="stat-card__sub">{stat.sub}</p>
              </div>
            ))}
          </div>

          <div className="achievements__art" aria-hidden="true">
            <div className="achievements__art-glow" />
            <svg
              className="achievements__trophy"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle
                cx="100"
                cy="95"
                r="72"
                stroke="#3d8bff"
                strokeWidth="2"
                opacity="0.55"
              />
              <rect
                x="70"
                y="150"
                width="60"
                height="14"
                rx="3"
                fill="#111a2e"
                stroke="#274063"
              />
              <rect
                x="80"
                y="130"
                width="40"
                height="20"
                fill="#0e1626"
                stroke="#274063"
              />
              <path
                d="M78 55h44v30c0 14-10 26-22 26s-22-12-22-26V55Z"
                fill="#132038"
                stroke="#4d8dff"
                strokeWidth="2"
              />
              <path
                d="M78 60H62a8 8 0 0 0-8 8v3c0 10 9 18 20 19M122 60h16a8 8 0 0 1 8 8v3c0 10-9 18-20 19"
                stroke="#4d8dff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M92 111v14M92 125h16M100 125c6-4 10-2 10 6"
                stroke="#4d8dff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="achievements__chip achievements__chip--left">
              <CodeIcon />
            </div>
            <div className="achievements__chip achievements__chip--right">
              <TargetIcon />
            </div>
          </div>
        </div>

        <h3 className="achievements__milestones-title">
          Mile<span className="achievements__title-highlight">stones</span>
        </h3>

        <div className="timeline-scroll">
          <div className="timeline">
            {MILESTONES.map((m) => (
              <div className="timeline__item" key={m.date}>
                <span className="timeline__icon">
                  <m.icon />
                </span>
                <span className="timeline__dot" />
                <p className="timeline__date">{m.date}</p>
                <p className="timeline__title">{m.title}</p>
                <p className="timeline__desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications">
          <p className="certifications__label">
            Certifications &amp; Courses
            <span className="certifications__label-dot" aria-hidden="true" />
          </p>
          <div className="certifications__list">
            {CERTIFICATIONS.map((cert) => (
              <div className="cert-chip" key={cert.title}>
                <span className="cert-chip__icon" style={{ color: cert.color }}>
                  <cert.icon />
                </span>
                <span>
                  <span className="cert-chip__title">{cert.title}</span>
                  <span className="cert-chip__provider">{cert.provider}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
