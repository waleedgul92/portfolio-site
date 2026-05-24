import React from "react";
import "./SkillsSection.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

function SkillsSection(props) {
  const theme = props.theme;
  return (
    <div className="skills-sec-main" id="skills">
      <Fade bottom duration={1000} distance="40px">
        <div className="skills-sec-header-div" style={{ textAlign: "center" }}>
          <h1
            className="skills-sec-header"
            style={{ color: "#F2C811", textAlign: "center" }}
          >
            Core Tech Stack
          </h1>
        </div>
        <div className="skills-sec-container">
          {skills.data.map((category, index) => (
            <div key={index} className="skills-sec-category-card">
              <h3 style={{ color: theme.text }}>{category.title}</h3>
              <div className="skills-sec-icons-grid">
                {category.softwareSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="skills-sec-icon-wrapper"
                    style={{ color: theme.text }}
                  >
                    <span
                      className="iconify"
                      data-icon={skill.fontAwesomeClassname}
                      style={skill.style}
                      data-inline="false"
                    ></span>
                    <p>{skill.skillName}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default SkillsSection;
