import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import ExperienceEducation from "../../containers/experienceEducation/ExperienceEducation";
import Projects from "../../containers/projects/Projects";
import SkillsSection from "../../containers/skillsSection/SkillsSection";
import Certifications from "../../containers/certifications/Certifications";
import Contact from "../../containers/contact/Contact";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <Header theme={theme} />
        <div style={{ backgroundColor: "transparent" }}>
          <Greeting theme={theme} />
        </div>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.015)",
            width: "100%",
            padding: "20px 0",
          }}
        >
          <ExperienceEducation theme={theme} />
        </div>
        <div style={{ backgroundColor: "transparent" }}>
          <Projects theme={theme} />
        </div>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.015)",
            width: "100%",
            padding: "20px 0",
          }}
        >
          <SkillsSection theme={theme} />
        </div>
        <div style={{ backgroundColor: "transparent" }}>
          <Certifications theme={theme} />
        </div>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.015)",
            width: "100%",
            padding: "20px 0",
          }}
        >
          <Contact theme={theme} />
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
