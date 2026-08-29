// import { useMemo } from "react";
// import "./Hero.css";
// import heroPhoto from "../../assets/utkarsh-hero.png";

// const NAV_LINKS = [
//   { label: "Home", href: "#home", active: true },
//   { label: "About", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Projects", href: "#projects" },
//   { label: "Experience", href: "#experience" },
//   { label: "Achievements", href: "#achievements" },
// ];

// const SOCIALS = [
//   {
//     label: "GitHub",
//     href: "https://github.com/utkarrrssh43",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.77 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.47 3.15-1.16 3.15-1.16.62 1.58.23 2.75.11 3.04.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
//       </svg>
//     ),
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/utkarsh-sinha-8251a7308",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor">
//         <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
//       </svg>
//     ),
//   },
//   {
//     label: "LeetCode",
//     href: "https://leetcode.com/u/utkarshsinha43",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="m14.5 4.5-6 6.5 4.2 4.2M8.5 11h9.5M9 15.2c0 2.4 1.9 4.3 4.3 4.3h1a4 4 0 0 0 2.8-1.15"
//         />
//       </svg>
//     ),
//   },
//   {
//     label: "Instagram",
//     href: "https://instagram.com/utkarrrssh_",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//         <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
//         <circle cx="12" cy="12" r="3.6" />
//         <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
//       </svg>
//     ),
//   },
// ];

// // Deterministic pseudo-random particle field so the layout doesn't
// // reshuffle on every re-render.
// function useParticles(count = 46) {
//   return useMemo(() => {
//     let seed = 42;
//     const rand = () => {
//       seed = (seed * 9301 + 49297) % 233280;
//       return seed / 233280;
//     };
//     return Array.from({ length: count }, (_, i) => ({
//       id: i,
//       top: rand() * 100,
//       left: rand() * 100,
//       size: 1 + rand() * 2,
//       duration: 4 + rand() * 6,
//       delay: rand() * 6,
//       opacity: 0.25 + rand() * 0.5,
//     }));
//   }, [count]);
// }

// export default function Hero() {
//   const particles = useParticles();

//   return (
//     <section className="hero" id="home">
//       <div className="hero-bg" aria-hidden="true">
//         <div className="hero-bg__glow hero-bg__glow--one" />
//         <div className="hero-bg__glow hero-bg__glow--two" />

//         <svg className="hero-network" viewBox="0 0 1000 700" preserveAspectRatio="none">
//           <polyline points="520,40 640,140 760,110 880,220" className="hero-network__line" />
//           <polyline points="600,260 700,320 660,420 780,460" className="hero-network__line" />
//           <polyline points="480,180 560,260 520,360" className="hero-network__line" />
//           <circle cx="520" cy="40" r="2.4" className="hero-network__node" />
//           <circle cx="640" cy="140" r="2" className="hero-network__node" />
//           <circle cx="760" cy="110" r="2.6" className="hero-network__node" />
//           <circle cx="880" cy="220" r="2" className="hero-network__node" />
//           <circle cx="700" cy="320" r="2.4" className="hero-network__node" />
//           <circle cx="660" cy="420" r="2" className="hero-network__node" />
//           <circle cx="780" cy="460" r="2.6" className="hero-network__node" />
//           <circle cx="520" cy="360" r="2" className="hero-network__node" />
//         </svg>

//         <div className="hero-particles">
//           {particles.map((p) => (
//             <span
//               key={p.id}
//               className="hero-particle"
//               style={{
//                 top: `${p.top}%`,
//                 left: `${p.left}%`,
//                 width: `${p.size}px`,
//                 height: `${p.size}px`,
//                 opacity: p.opacity,
//                 animationDuration: `${p.duration}s`,
//                 animationDelay: `${p.delay}s`,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <nav className="hero-nav">
//         <a href="#home" className="hero-logo">
//           <span className="hero-logo__mark" aria-hidden="true">
//             <svg viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 1.5c.9 3.6 2.9 5.6 6.5 6.5-3.6.9-5.6 2.9-6.5 6.5-.9-3.6-2.9-5.6-6.5-6.5 3.6-.9 5.6-2.9 6.5-6.5Z" />
//               <path d="M19.5 15c.45 1.8 1.45 2.8 3.25 3.25-1.8.45-2.8 1.45-3.25 3.25-.45-1.8-1.45-2.8-3.25-3.25 1.8-.45 2.8-1.45 3.25-3.25Z" />
//             </svg>
//           </span>
//           Utkarsh Sinha
//         </a>

//         <ul className="hero-nav__links">
//           {NAV_LINKS.map((link) => (
//             <li key={link.label}>
//               <a href={link.href} className={link.active ? "is-active" : ""}>
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <a href="#contact" className="hero-nav__cta">
//           Let&rsquo;s Connect
//           <span className="hero-nav__dot" aria-hidden="true" />
//         </a>
//       </nav>

//       <div className="hero-content">
//         <div className="hero-text">
//           <p className="hero-greeting">Hi, I&rsquo;m</p>
//           <h1 className="hero-name">Utkarsh Sinha</h1>
//           <h2 className="hero-tagline">
//             I build scalable web apps and solve{" "}
//             <span className="hero-tagline__highlight">real-world</span> problems.
//           </h2>
//           <p className="hero-desc">
//             Computer Science student &amp; developer, passionate about building
//             impactful digital experiences.
//           </p>

//           <div className="hero-actions">
//             <a href="https://drive.google.com/file/d/1hn9HPwZ6rHlKfL9gydNWfAkjMLn2MVOU/view?usp=sharing" className="btn btn--primary" download>
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0-4-4m4 4 4-4M5 20h14" />
//               </svg>
//               Download Resume
//             </a>
//             <a href="#projects" className="btn btn--secondary">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6" />
//               </svg>
//               View My Work
//             </a>
//           </div>

//           <div className="hero-socials">
//             {SOCIALS.map((s) => (
//               <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="hero-photo">
//           <div className="hero-photo__frame">
//             <img
//               src={heroPhoto}
//               alt="Utkarsh Sinha"
//               onError={(e) => {
//                 e.currentTarget.style.display = "none";
//                 e.currentTarget.parentElement.classList.add("hero-photo__frame--empty");
//               }}
//             />
//             <div className="hero-photo__glow" aria-hidden="true" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useMemo } from "react";
import "./Hero.css";
import heroPhoto from "../../assets/utkarsh-hero.png";

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/utkarrrssh43",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.77 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.47 3.15-1.16 3.15-1.16.62 1.58.23 2.75.11 3.04.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/utkarsh-sinha-8251a7308",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/utkarshsinha43",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.5 4.5-6 6.5 4.2 4.2M8.5 11h9.5M9 15.2c0 2.4 1.9 4.3 4.3 4.3h1a4 4 0 0 0 2.8-1.15"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/utkarrrssh_",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

// Deterministic pseudo-random particle field so the layout doesn't
// reshuffle on every re-render.
function useParticles(count = 46) {
  return useMemo(() => {
    let seed = 42;

    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: rand() * 100,
      left: rand() * 100,
      size: 1 + rand() * 2,
      duration: 4 + rand() * 6,
      delay: rand() * 6,
      opacity: 0.25 + rand() * 0.5,
    }));
  }, [count]);
}

export default function Hero() {
  const particles = useParticles();

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg__glow hero-bg__glow--one" />
        <div className="hero-bg__glow hero-bg__glow--two" />

        <svg
          className="hero-network"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >
          <polyline
            points="520,40 640,140 760,110 880,220"
            className="hero-network__line"
          />
          <polyline
            points="600,260 700,320 660,420 780,460"
            className="hero-network__line"
          />
          <polyline
            points="480,180 560,260 520,360"
            className="hero-network__line"
          />

          <circle cx="520" cy="40" r="2.4" className="hero-network__node" />
          <circle cx="640" cy="140" r="2" className="hero-network__node" />
          <circle cx="760" cy="110" r="2.6" className="hero-network__node" />
          <circle cx="880" cy="220" r="2" className="hero-network__node" />
          <circle cx="700" cy="320" r="2.4" className="hero-network__node" />
          <circle cx="660" cy="420" r="2" className="hero-network__node" />
          <circle cx="780" cy="460" r="2.6" className="hero-network__node" />
          <circle cx="520" cy="360" r="2" className="hero-network__node" />
        </svg>

        <div className="hero-particles">
          {particles.map((p) => (
            <span
              key={p.id}
              className="hero-particle"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <nav className="hero-nav">
        <a href="#home" className="hero-logo">
          <span className="hero-logo__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1.5c.9 3.6 2.9 5.6 6.5 6.5-3.6.9-5.6 2.9-6.5 6.5-.9-3.6-2.9-5.6-6.5-6.5 3.6-.9 5.6-2.9 6.5-6.5Z" />
              <path d="M19.5 15c.45 1.8 1.45 2.8 3.25 3.25-1.8.45-2.8 1.45-3.25 3.25-.45-1.8-1.45-2.8-3.25-3.25 1.8-.45 2.8-1.45 3.25-3.25Z" />
            </svg>
          </span>
          Utkarsh Sinha
        </a>

        <ul className="hero-nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={link.active ? "is-active" : ""}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hero-nav__cta">
          Let&rsquo;s Connect
          <span className="hero-nav__dot" aria-hidden="true" />
        </a>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I&rsquo;m</p>
          <h1 className="hero-name">
            Utkarsh{" "}
            <span className="experience__title-highlight">Sinha</span>
          </h1>
          <h2 className="hero-tagline">
            I build scalable web apps and solve{" "}
            <span className="hero-tagline__highlight">real-world</span>{" "}
            problems.
          </h2>
          <p className="hero-desc">
            Computer Science student &amp; developer, passionate about building
            impactful digital experiences.
          </p>
          {/* <div className="hero-actions">
            <a
              href="https://drive.google.com/file/d/1hn9HPwZ6rHlKfL9gydNWfAkjMLn2MVOU/view?usp=sharing"
              className="btn btn--primary"
              download
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v12m0 0-4-4m4 4 4-4M5 20h14"
                />
              </svg>
              Download Resume
            </a>

            <a href="#projects" className="btn btn--secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m0 0-6-6m6 6-6 6"
                />
              </svg>
              View My Work
            </a>
          </div> */}

          <div className="hero-actions">
            <a
              href="https://drive.google.com/file/d/1hn9HPwZ6rHlKfL9gydNWfAkjMLn2MVOU/view?usp=sharing"
              className="button resume-button"
              download
            >
              <span className="button-content">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0-4-4m4 4 4-4M5 20h14"
                  />
                </svg>
                Download Resume
              </span>
            </a>

            <a href="#projects" className="btn btn--secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m0 0-6-6m6 6-6 6"
                />
              </svg>
              View My Work
            </a>
          </div>

          {/* Updated Social Icons */}
          <ul className="hero-socials example-2">
            {SOCIALS.map((social) => (
              <li className="icon-content" key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  data-social={social.label.toLowerCase()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="filled"></div>

                  {social.icon}
                </a>

                <div className="tooltip">{social.label}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-photo">
          <div className="hero-photo__frame">
            <img
              src={heroPhoto}
              alt="Utkarsh Sinha"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.classList.add(
                  "hero-photo__frame--empty",
                );
              }}
            />

            <div className="hero-photo__glow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
