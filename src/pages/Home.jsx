import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Achievements from "../components/achievements/Achievements";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;