import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Slide from 'react-reveal/Slide';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesOptions";

//components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousel from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.components";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import ProjectTimeline from "./components/projects-timeline/projects-timeline.components";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";

import './App.css';

const App = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <Particles
        id="tsparticles"
        className="particles particles-box"
        init={particlesInit}
        options={particlesOptions}
      />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>

      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ProjectTimeline />
          </Slide>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>
      </div>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
