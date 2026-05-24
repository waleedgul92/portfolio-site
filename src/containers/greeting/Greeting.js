import React from "react";
import "./Greeting.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
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
              <span
                className="greeting-top-label"
                style={{ color: theme.orange }}
              >
                Agentic AI Engineer & ML Specialist
              </span>

              <h1 className="greeting-name-huge">{greeting.sub}</h1>

              <div
                className="greeting-accent-line"
                style={{ backgroundColor: theme.orange }}
              ></div>

              <div className="introduction-text" style={{ color: theme.text }}>
                <p className="bio-paragraph">
                  I am a <strong>Data Scientist</strong> and{" "}
                  <strong>ML Engineer</strong> pursuing an MSc in AI at{" "}
                  <strong>London Metropolitan University</strong> after
                  graduating from <strong>FAST-NUCES</strong>. I develop core
                  intelligent applications leveraging <strong>PyTorch</strong>{" "}
                  and <strong>TensorFlow</strong>.
                </p>

                <p className="bio-paragraph">
                  I specialize in deploying <strong>Agentic AI</strong>{" "}
                  workflows and <strong>RAG</strong> pipelines via{" "}
                  <strong>LangGraph</strong> and <strong>Ollama</strong>,
                  serving these production-grade solutions using{" "}
                  <strong>FastAPI</strong>, <strong>Docker</strong>, and{" "}
                  <strong>k8s</strong> on <strong>AWS</strong>.
                </p>
              </div>

              <CompetitiveSites logos={competitiveSites.competitiveSites} />

              <div className="button-greeting-div">
                <div className="portfolio-btn-filled">
                  <Button text="Contact Me" href="/contact" />
                </div>
                <div className="portfolio-btn-outlined">
                  <Button
                    text="View Resume"
                    newTab={true}
                    href={
                      "https://drive.google.com/drive/folders/1Ah_2lLJqiKwI6AV_MmgTWAtoK3-V9RHZ?usp=sharing"
                    }
                  />
                </div>
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
