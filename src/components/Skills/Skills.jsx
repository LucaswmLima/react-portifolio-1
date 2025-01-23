import { SkillsList } from "./SkillsList";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const categorizedSkills = {
    Frontend: SkillsList.filter(skill => skill.category === "Frontend"),
    Backend: SkillsList.filter(skill => skill.category === "Backend"),
    Mobile: SkillsList.filter(skill => skill.category === "Mobile"),
    Database: SkillsList.filter(skill => skill.category === "Database"),
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-box">
              <h2>Habilidades</h2>
              <Row>
                {Object.entries(categorizedSkills).map(([category, skills], index) => (
                  <Col key={index} md={3} sm={12}>
                    <h4>{category}</h4>
                    <ul className="skills-list">
                      {skills.map((skill, i) => (
                        <li key={i} className="skill-item">
                          <img
                            className="skill-language-icon"
                            src={skill.icon}
                            alt={`${skill.title} icon`}
                          />
                          {skill.title}
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
