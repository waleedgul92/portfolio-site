import React from "react";
import "./SkillsSection.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

function SkillsSection(props) {
  const theme = props.theme;
  return (
    <div className="skills-sec-main" id="skills">
      <Fade bottom duration={1000} distance="40px">
        <div className="skills-sec-header-div" style={{ textAlign: "left" }}>
          <h1
            className="skills-sec-header"
            style={{ color: "#F2C811", textAlign: "left" }}
          >
            Core Tech Stack
          </h1>
        </div>
        <div className="skills-sec-container">
          {skills.data.map((category, index) => (
            <div key={index} className="skills-sec-category-card">
              <h3 style={{ color: theme.text }}>{category.title}</h3>
              <div
                className="skills-sec-icons-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
                  gap: "20px",
                }}
              >
                {category.softwareSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="skills-sec-icon-wrapper"
                    style={{
                      color: theme.text,
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      className="iconify"
                      data-icon={skill.fontAwesomeClassname}
                      style={{
                        ...skill.style,
                        fontSize: "36px",
                        maxWidth: "100%",
                      }}
                      data-inline="false"
                    ></span>
                    <p
                      style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "100%",
                        marginTop: "4px",
                      }}
                    >
                      {skill.skillName}
                    </p>
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
