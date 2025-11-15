import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import Badge from "react-bootstrap/Badge";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import { projectcards } from "../../portfolio";
import { CardColumns, Card } from "react-bootstrap";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  // Function to handle image click
  handleImageClick = (githubUrl) => {
    if (githubUrl) {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.orange }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          <CardColumns>
            {projectcards.list.map((proj, index) => {
              return (
                <Card className="h-100" key={index}>
                  <Card.Img
                    variant="top"
                    src={require(`../../assets/projects/${proj.img_path}`)}
                    onClick={() => this.handleImageClick(proj.code)}
                    style={{ 
                      cursor: proj.code ? 'pointer' : 'default',
                      transition: 'transform 0.2s ease-in-out',
                      height: '200px',
                      objectFit: 'cover',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      if (proj.code) {
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    title={proj.code ? "Click to view on GitHub" : ""}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ lineHeight: "1.5", marginTop: "0" }}>
                        {proj.title}
                        {proj.link && (
                          <a
                            style={{ color: theme.text }}
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              className={`fas fa-external-link-alt`}
                              style={{
                                color: proj.linkcolor,
                                marginLeft: "10px",
                              }}
                            ></i>
                          </a>
                        )}
                        <a
                          style={{ color: theme.text }}
                          href={proj.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className={`fab fa-github`}
                            style={{
                              color: proj.linkcolor,
                              paddingLeft: "10px",
                            }}
                          ></i>
                        </a>
                      </h2>
                    </Card.Title>
                    <div>
                      {proj.tags.map((demo2, tagIndex) => {
                        return (
                          <Badge
                            key={tagIndex}
                            style={{
                              marginRight: "0.5em",
                              backgroundColor: demo2.color,
                            }}
                          >
                            {" "}
                            {demo2.lang}
                          </Badge>
                        );
                      })}
                    </div>
                    <div
                      className="text-center"
                      style={{ marginTop: "20px" }}
                    ></div>
                    <Card.Text>{proj.description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/waleedgul92"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;