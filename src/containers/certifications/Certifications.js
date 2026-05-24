import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import {
  awardsAndAchievements,
  professionalCertifications,
} from "../../portfolio";

class Certifications extends Component {
  render() {
    return (
      <div
        className="main"
        id="certs"
        style={{
          width: "90%",
          margin: "0 auto",
          marginTop: "3rem",
          paddingBottom: "30px",
        }}
      >
        <Fade bottom duration={1000} distance="40px">
          <div>
            <h1
              style={{
                color: "#F2C811",
                fontSize: "36px",
                fontFamily: "Google Sans Bold, sans-serif",
                marginBottom: "35px",
                textAlign: "left",
              }}
            >
              Certifications & Badges
            </h1>

            <div
              style={{
                display: "flex",
                gap: "50px",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <div style={{ flex: "1", minWidth: "320px" }}>
                <h2
                  style={{
                    color: "#F2C811",
                    fontSize: "20px",
                    letterSpacing: "0.5px",
                    fontFamily: "Google Sans Medium, sans-serif",
                    marginBottom: "25px",
                    textAlign: "left",
                  }}
                >
                  🔑 {awardsAndAchievements.title}
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  {awardsAndAchievements.list.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      <span
                        style={{
                          color: "#F2C811",
                          fontSize: "16px",
                          marginTop: "2px",
                        }}
                      >
                        ▸
                      </span>
                      <div style={{ flexGrow: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                            gap: "15px",
                          }}
                        >
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "600",
                              margin: "0",
                              lineHeight: "1.4",
                              fontFamily: "Google Sans Medium, sans-serif",
                            }}
                          >
                            {item.certificate_link &&
                            item.certificate_link !== "#" ? (
                              <a
                                href={item.certificate_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "none",
                                }}
                              >
                                {item.title}{" "}
                                <i
                                  className="fas fa-external-link-alt"
                                  style={{
                                    fontSize: "11px",
                                    marginLeft: "4px",
                                    color: "#F2C811",
                                  }}
                                ></i>
                              </a>
                            ) : (
                              <span style={{ color: "#ffffff" }}>
                                {item.title}
                              </span>
                            )}
                          </h3>
                          {item.date && (
                            <span
                              style={{
                                color: "#868e96",
                                fontSize: "14px",
                                whiteSpace: "nowrap",
                                fontFamily: "Google Sans Regular, sans-serif",
                              }}
                            >
                              {item.date}
                            </span>
                          )}
                        </div>
                        <p
                          style={{
                            color: "#a7a7a7",
                            fontSize: "14px",
                            margin: "4px 0 0 0",
                            fontFamily: "Google Sans Regular, sans-serif",
                          }}
                        >
                          {item.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ flex: "1", minWidth: "320px" }}>
                <h2
                  style={{
                    color: "#F2C811",
                    fontSize: "20px",
                    letterSpacing: "0.5px",
                    fontFamily: "Google Sans Medium, sans-serif",
                    marginBottom: "25px",
                    textAlign: "left",
                  }}
                >
                  🛡️ {professionalCertifications.title}
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  {professionalCertifications.list.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      <span
                        style={{
                          color: "#F2C811",
                          fontSize: "16px",
                          marginTop: "2px",
                        }}
                      >
                        ▸
                      </span>
                      <div style={{ flexGrow: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                            gap: "15px",
                          }}
                        >
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "600",
                              margin: "0",
                              lineHeight: "1.4",
                              fontFamily: "Google Sans Medium, sans-serif",
                            }}
                          >
                            <a
                              href={item.certificate_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: "#ffffff",
                                textDecoration: "none",
                              }}
                            >
                              {item.title}{" "}
                              <i
                                className="fas fa-external-link-alt"
                                style={{
                                  fontSize: "11px",
                                  marginLeft: "4px",
                                  color: "#F2C811",
                                }}
                              ></i>
                            </a>
                          </h3>
                          {item.date && (
                            <span
                              style={{
                                color: "#868e96",
                                fontSize: "14px",
                                whiteSpace: "nowrap",
                                fontFamily: "Google Sans Regular, sans-serif",
                              }}
                            >
                              {item.date}
                            </span>
                          )}
                        </div>
                        <p
                          style={{
                            color: "#a7a7a7",
                            fontSize: "14px",
                            margin: "4px 0 0 0",
                            fontFamily: "Google Sans Regular, sans-serif",
                          }}
                        >
                          {item.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Certifications;
