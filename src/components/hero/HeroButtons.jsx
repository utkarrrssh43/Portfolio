const HeroButtons = () => {
  return (
    <div className="hero-buttons">

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="btn primary-btn"
      >
        Resume
      </a>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="btn secondary-btn"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="btn secondary-btn"
      >
        LinkedIn
      </a>

      <a
        href="https://leetcode.com/"
        target="_blank"
        rel="noreferrer"
        className="btn secondary-btn"
      >
        LeetCode
      </a>

    </div>
  );
};

export default HeroButtons;