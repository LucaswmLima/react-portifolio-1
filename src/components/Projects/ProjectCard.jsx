import React, { useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  technologies,
  imgUrl,
  linkOnline,
  linkGitHub,
  bgColor,
}) => {
  const isOnlineLinkEmpty = !linkOnline;
  const isGitHubLinkEmpty = !linkGitHub;
  const showOnlyOneButton = isOnlineLinkEmpty || isGitHubLinkEmpty;

  return (
    <Container className="project-card-container">
      <Row
        className="project-card justify-content-center"
        style={
          bgColor
            ? {
                backgroundImage: `linear-gradient(${bgColor[0]}, ${bgColor[1]})`,
              }
            : {}
        }
      >
        <Col className="project-card-info" md={6} sm={12}>
          <Row className="project-title">
            <h4>{title}</h4>
          </Row>
          <Row className="project-description">
            <p>{description}</p>
          </Row>
          <Row
            md="auto"
            sm="auto"
            className="project-techs justify-content-center flex-nowrap"
          >
            {technologies && technologies.length > 0 ? (
              technologies.map((item, index) => (
                <Col key={index} className="text-center">
                  <p>{item}</p>
                </Col>
              ))
            ) : (
              <p></p>
            )}
          </Row>

          <Row
            className={`align-items-end projects-buttons ${
              showOnlyOneButton ? "justify-content-center" : ""
            }`}
          >
            {!isOnlineLinkEmpty && (
              <Col xs={6} md={6}>
                <a href={linkOnline} target="_blank" rel="noopener noreferrer">
                  <Button>Online</Button>
                </a>
              </Col>
            )}
            {!isGitHubLinkEmpty && (
              <Col xs={6} md={6}>
                <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
                  <Button>GitHub</Button>
                </a>
              </Col>
            )}
          </Row>
          <Row className="project-card-img">
            <div className="project-img-container">
              <img src={imgUrl} alt="Project" />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
