import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { projectsList } from "./ProjectsList";
import { ProjectCard } from "./ProjectCard";
import { Link, Element } from 'react-scroll';



const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export const Projects = () => {
  const projectsChunks = chunkArray(projectsList, 3);

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col  size={12}>
            <h2>Projetos</h2>
          
          <Tab.Container id="projects-tabs" defaultActiveKey={"tab-1"}>
            <Nav
              variant="pills"
              className="nav-pills mb-4 mt-5 justify-content-center align-items-center"
              defaultActiveKey="/home"
            >
              {projectsChunks.map((chunk, index) => (
                <Nav.Item key={index}>
                  <Nav.Link href="#projects" eventKey={`tab-${index + 1}`}>{index + 1}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content id="slideInUp">
              {projectsChunks.map((chunk, index) => (
                <Tab.Pane key={index} eventKey={`tab-${index + 1}`}>
                  <Col>
                    {chunk.map((project, projectIndex) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Col>
                </Tab.Pane>
              ))}
            </Tab.Content>
            <Nav
              variant="pills"
              className="nav-pills mt-5 mb-5 justify-content-center align-items-center"
              defaultActiveKey="/home"
            >
              {projectsChunks.map((chunk, index) => (
                <Nav.Item key={index}>
                  <Nav.Link href="#projects" eventKey={`tab-${index + 1}`}>{index + 1}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Tab.Container>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};