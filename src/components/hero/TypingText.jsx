import { useEffect, useState } from "react";

const texts = [
  "Java Backend Developer",
  "Spring Boot Enthusiast",
  "Problem Solver",
  "Future SDE"
];

const TypingText = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[index].length) {
        setCurrentText(
          prev => prev + texts[index][charIndex]
        );
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setIndex(prev => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <h2 className="typing-text">
      {currentText}
      <span>|</span>
    </h2>
  );
};

export default TypingText;