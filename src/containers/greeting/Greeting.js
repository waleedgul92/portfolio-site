import React from "react";
import "./Greeting.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";

export function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Agentic AI Engineer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Data Scientist")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("ML Engineer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Data Analyst")
                      .pauseFor(200)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  An <mark data-entity="noun">Agentic AI and Data Science expert</mark>{" "}
                  dedicated to{" "}
                  <mark data-entity="freelance">
                    architecting autonomous multi-agent workflows
                  </mark>{" "}
                  with a focus on <mark data-entity="skill">LLM orchestration</mark>,
                  leveraging <mark data-entity="tools">Agentic frameworks and MLOps tools</mark> to
                  build resilient, production-ready intelligent applications
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={
                    "https://drive.google.com/drive/folders/1Ah_2lLJqiKwI6AV_MmgTWAtoK3-V9RHZ?usp=sharing"
                  }
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Greeting;
