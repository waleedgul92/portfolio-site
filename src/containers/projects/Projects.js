import React from "react";
import "./Project.css";
import { projectcards, projectsHeader } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Projects(props) {
  const theme = props.theme;
  return (
    <div
      className="main"
      id="projects"
      style={{ width: "90%", margin: "0 auto", marginTop: "3rem" }}
    >
      <Fade bottom duration={1000} distance="40px">
        <div className="projects-header-div" style={{ textAlign: "center" }}>
          <h1
            className="projects-header"
            style={{
              color: "#F2C811",
              fontSize: "36px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            {projectsHeader.title}
          </h1>
          <p
            className="projects-subtitle"
            style={{
              color: theme.text,
              marginBottom: "30px",
              opacity: 0.8,
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            {projectsHeader.description}
          </p>
        </div>
        <div
          className="repo-cards-div-main"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {projectcards.list.map((repo, index) => {
            return (
              <div
                key={index}
                className="repo-card-div"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                }}
              >
                {repo.img_path && (
                  <div
                    style={{
                      width: "100%",
                      height: "150px",
                      overflow: "hidden",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                    }}
                  >
                    <img
                      src={require(`../../assets/projects/${repo.img_path}`)}
                      alt={repo.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
                <div
                  style={{
                    padding: "16px",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      color: theme.text,
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {repo.title}
                  </p>
                  <p
                    style={{
                      color: theme.text,
                      opacity: 0.7,
                      fontSize: "13px",
                      lineHeight: "1.5",
                      margin: "0 0 16px 0",
                      flexGrow: 1,
                    }}
                  >
                    {repo.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "16px",
                    }}
                  >
                    {repo.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: tag.color,
                          color: "#ffffff",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          fontSize: "11px",
                          fontWeight: "600",
                        }}
                      >
                        {tag.lang}
                      </span>
                    ))}
                  </div>
                  <div>
                    <a
                      href={repo.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#F2C811",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      View Code →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
}
