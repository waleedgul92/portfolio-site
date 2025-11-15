import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  // Handle image click to open GitHub link
  const handleImageClick = () => {
    if (props.ghLink) {
      window.open(props.ghLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card className="project-card-view">
      {/* Clickable Image */}
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img"
        onClick={handleImageClick}
        style={{ cursor: props.ghLink ? 'pointer' : 'default' }}
        title={props.ghLink ? "Click to view on GitHub" : ""}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* GitHub Link Button */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BiLinkExternal /> &nbsp;
            View Code
          </Button>
        )}
        
        {/* Demo/Project Link Button (if exists) */}
        {props.demoLink && (
          <Button 
            variant="primary" 
            href={props.demoLink} 
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "Live Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
