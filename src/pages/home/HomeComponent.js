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
        <Greeting theme={theme} />
        <ExperienceEducation theme={theme} />
        <Projects theme={theme} />
        <SkillsSection theme={theme} />
        <Certifications theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
