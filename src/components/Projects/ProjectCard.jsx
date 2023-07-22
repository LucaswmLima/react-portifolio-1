import { Col, Row, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkOnline, linkGitHub }) => {
  const isOnlineLinkEmpty = !linkOnline;
  const isGitHubLinkEmpty = !linkGitHub;
  const showOnlyOneButton = isOnlineLinkEmpty || isGitHubLinkEmpty;

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Row className={`align-items-center projects-buttons ${showOnlyOneButton ? "justify-content-center" : ""}`}>
            {!isOnlineLinkEmpty && (
              <Col size={12} sm={6}>
                <a href={linkOnline} target="_blank" rel="noopener noreferrer">
                  <Button>Ver Online</Button>
                </a>
              </Col>
            )}
            {!isGitHubLinkEmpty && (
              <Col size={12} sm={6}>
                <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
                  <Button>GitHub</Button>
                </a>
              </Col>
            )}
          </Row>
        </div>
      </div>
    </Col>
  );
};
