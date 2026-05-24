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
            {resumeleft.left.data.map((exp, index) => (
              <div key={index} className="exp-edu-card">
                <h2 style={{ color: theme.text }}>{exp.title}</h2>
                <h4 style={{ color: "#F2C811" }}>{exp.subtitle}</h4>
                <p className="exp-edu-date">{exp.date}</p>
                <ul>
                  {exp.content.map((bullet, i) => (
                    <li key={i} style={{ color: theme.text }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="exp-edu-column">
            <h1 className="exp-edu-section-title" style={{ color: "#F2C811" }}>
              {resumeright.right[0].title[0]}
            </h1>
            {resumeright.right[0].data.map((edu, index) => (
              <div key={index} className="exp-edu-card">
                <h2 style={{ color: theme.text }}>{edu.title}</h2>
                <h4 style={{ color: "#F2C811" }}>{edu.subtitle}</h4>
                <p className="exp-edu-date">{edu.date}</p>
              </div>
            ))}

            <h1
              className="exp-edu-section-title unique-sec-spacing"
              style={{ color: "#F2C811" }}
            >
              {resumeright.right[1].title[0]}
            </h1>
            {resumeright.right[1].data.map((free, index) => (
              <div key={index} className="exp-edu-card">
                <h2 style={{ color: theme.text }}>{free.title}</h2>
                <ul>
                  {free.content.map((bullet, i) => (
                    <li key={i} style={{ color: theme.text }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ExperienceEducation;
