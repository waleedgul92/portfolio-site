import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import {
  awardsAndAchievements,
  professionalCertifications,
} from "../../portfolio";

class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      allHonors: [
        ...awardsAndAchievements.list,
        ...professionalCertifications.list,
      ],
    };
  }

  setActiveHonor = (id) => {
    this.setState({ activeIndex: id });
    const sliderElement = document.getElementById("honor-slider");
    if (sliderElement) {
      sliderElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  render() {
    const currentHonor = this.state.allHonors[this.state.activeIndex];

    return (
      <div
        className="main"
        id="certs"
        style={{
          width: "90%",
          margin: "0 auto",
          marginTop: "3rem",
          paddingBottom: "50px",
        }}
      >
        <Fade bottom duration={1000} distance="40px">
          {/* Exact Match Header Section */}
          <div className="honors-header-container">
            <span className="honors-index"></span>
            <h1 className="honors-title">Honors & Accreditations</h1>
            <div className="honors-header-line"></div>
          </div>

          <div id="honor-slider" className="honor-slider-container">
            <div className="slider-card">
              <div className="slider-image-column">
                <img
                  src={require(`../../assets/certificates/${currentHonor.image_path}`)}
                  alt={currentHonor.title}
                />
              </div>
              <div className="slider-info-column">
                <div className="slider-badge">{currentHonor.category}</div>
                <h2 className="slider-title">{currentHonor.title}</h2>
                <p className="slider-desc">{currentHonor.description}</p>
                <div className="slider-meta">
                  <span className="slider-issuer">{currentHonor.issuer}</span>
                  <span className="slider-date">{currentHonor.date}</span>
                </div>
              </div>
            </div>

            <div className="slider-dots">
              {this.state.allHonors.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${
                    this.state.activeIndex === i ? "active" : ""
                  }`}
                  onClick={() => this.setState({ activeIndex: i })}
                ></div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "50px",
              flexWrap: "wrap",
              width: "100%",
              marginTop: "60px",
            }}
          >
            <div style={{ flex: "1", minWidth: "320px" }}>
              <h3 className="column-header">
                🏆 {awardsAndAchievements.title}
              </h3>
              <div className="list-container">
                {awardsAndAchievements.list.map((item) => (
                  <div
                    key={item.id}
                    className={`list-item ${
                      this.state.activeIndex === item.id ? "active" : ""
                    }`}
                    onClick={() => this.setActiveHonor(item.id)}
                  >
                    <span className="bullet">▸</span>
                    <div className="item-content">
                      <div className="item-header">
                        <span className="item-title">{item.title}</span>
                        <span className="item-date">{item.date}</span>
                      </div>
                      <span className="item-issuer">{item.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1", minWidth: "320px" }}>
              <h3 className="column-header">
                🛡️ {professionalCertifications.title}
              </h3>
              <div className="list-container">
                {professionalCertifications.list.map((item) => (
                  <div
                    key={item.id}
                    className={`list-item ${
                      this.state.activeIndex === item.id ? "active" : ""
                    }`}
                    onClick={() => this.setActiveHonor(item.id)}
                  >
                    <span className="bullet">▸</span>
                    <div className="item-content">
                      <div className="item-header">
                        <span className="item-title">{item.title}</span>
                        <span className="item-date">{item.date}</span>
                      </div>
                      <span className="item-issuer">{item.issuer}</span>
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
}

export default Certifications;
