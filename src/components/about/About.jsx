import "../../styles/about.css";
import aboutPhoto from "../../assets/utkarsh-about.png";

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    <path strokeLinecap="round" d="m17.5 6.5 2-2" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"
    />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20V10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 20V4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 20H2" />
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

const About = () => {
  const stats = [
    {
      //icon: "🎓",
      icon: CapIcon,
      accent: "blue",
      label: "Education",
      value: "B.Tech CSE",
      sub: "KIIT University\n2023 - 2027",
    },
    {
      icon: ChartIcon,
      accent: "blue",
      value: "8.68 / 10",
      sub: "Consistent\n8.5+ SGPA",
    },
    {
      icon: LocationIcon, //"📍",
      accent: "blue",
      label: "Location",
      value: "Bhubaneswar,",
      sub: "India",
    },
    {
      //icon: "🎯",
      icon: TargetIcon,
      accent: "blue",
      label: "Focus",
      value: "Full Stack Dev",
      sub: "AI/ML\nDSA",
    },
  ];

  return (
    <section className="about-section" id="about">
      <p className="section-tag">
        <span className="tag-dot">02 · </span> About Me
      </p>

      <div className="about-content">
        <div className="about-left">
          {/* <div className="about-badge">
            <span className="badge-dot"></span>
            ABOUT ME
          </div> */}

          <h2 className="about-heading">
            Get to know <span>me</span>
          </h2>

          <p className="about-para">
            I'm a passionate Computer Science student who loves turning ideas
            into impactful products. I enjoy solving problems, learning new
            technologies, and building applications that create real value.
          </p>

          <div className="stats-grid">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div className="stat-card" key={index}>
                  <div className="stat-icon">
                    {typeof Icon === "function" ? <Icon /> : Icon}
                  </div>

                  <p className="stat-label">{stat.label}</p>

                  <p className="stat-value">{stat.value}</p>

                  <p className="stat-sub">
                    {stat.sub.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="about-signature">Utkarsh Sinha</p>
        </div>

        <div className="about-right">
          <div className="about-image-box">
            <img
              src={aboutPhoto}
              alt="Developer Workspace"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
