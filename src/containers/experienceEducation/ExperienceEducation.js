import React from "react";
import "./ExperienceEducation.css";
import { resumeleft, resumeright } from "../../portfolio";
import { Fade } from "react-reveal";

function ExperienceEducation(props) {
  const theme = props.theme;
  return (
    <div className="exp-edu-main" id="resume">
      <Fade bottom duration={1000} distance="40px">
        <div className="exp-edu-row">
          <div className="exp-edu-column">
            <h1 className="exp-edu-section-title" style={{ color: "#F2C811" }}>
              {resumeleft.left.title[0]}
            </h1>
            <div className="timeline-container">
              {resumeleft.left.data.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-node"></div>
                  <div className="timeline-content">
                    <div className="title-row">
                      <span className="orange-badge">{exp.title}</span>
                      <span
                        className="duration-text"
                        style={{ color: theme.text }}
                      >
                        {exp.date}
                      </span>
                    </div>
                    <h3 className="subtitle-text" style={{ color: theme.text }}>
                      {exp.subtitle}
                    </h3>
                    <ul className="bullet-list">
                      {exp.content.map((bullet, i) => (
                        <li key={i} style={{ color: theme.text }}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="exp-edu-column">
            <h1 className="exp-edu-section-title" style={{ color: "#F2C811" }}>
              {resumeright.right[0].title[0]}
            </h1>
            <div className="timeline-container">
              {resumeright.right[0].data.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-node"></div>
                  <div className="timeline-content">
                    <div className="title-row">
                      <span className="orange-badge">{edu.title}</span>
                      <span
                        className="duration-text"
                        style={{ color: theme.text }}
                      >
                        {edu.date}
                      </span>
                    </div>
                    <h3 className="subtitle-text" style={{ color: theme.text }}>
                      {edu.subtitle}
                    </h3>
                    {edu.content && edu.content.length > 0 && (
                      <ul className="bullet-list">
                        {edu.content.map((bullet, i) => (
                          <li key={i} style={{ color: theme.text }}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ExperienceEducation;
