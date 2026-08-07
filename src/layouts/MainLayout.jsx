import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Achievements from "../components/achievements/Achievements";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import Contacts from "../components/contacts/Contacts";
import Experience from "../components/experience/Experience";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      {/* <Achievements /> */}

      <Projects />

      <Experience />

      <Achievements />

      <Contacts/>

      <Footer />
    </>
  );
};

export default MainLayout;
