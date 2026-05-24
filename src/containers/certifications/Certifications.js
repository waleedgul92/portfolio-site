import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard.js";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div
        className="main"
        id="certs"
        style={{
          width: "90%",
          margin: "0 auto",
          marginTop: "3rem",
          display: "block",
        }}
      >
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1
              className="certs-header"
              style={{
                color: "#F2C811",
                textAlign: "left",
                width: "100%",
                fontSize: "36px",
                marginBottom: "30px",
              }}
            >
              Certifications & Badges
            </h1>
          </Fade>
        </div>
        <div
          className="certs-body-div"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            width: "100%",
          }}
        >
          {certifications.certifications.map((cert, index) => {
            return (
              <CertificationCard key={index} certificate={cert} theme={theme} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
