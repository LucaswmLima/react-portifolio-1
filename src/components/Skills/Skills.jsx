import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SkillsList } from "./SkillsList";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-box" id="skills-box">
              <h2>Habilidades</h2>
              <p>
                As tecnologias que tenho conhecimento.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
              >
                {SkillsList.map((skill, index) => (
                  <div key={index}>
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={buildStyles({
                        pathColor: `#6C31A5`,
                        textColor: "#fff",
                        trailColor: "#2A2A2A",
                        strokeLinecap: "round",
                      })}
                    />
                    <h4>{skill.title}</h4>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
