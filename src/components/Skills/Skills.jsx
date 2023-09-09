import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SkillsList } from "./SkillsList";
import { Container, Row, Col,ProgressBar} from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
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
              <Carousel
                responsive={responsive}
                infinite={true}
                showDots={true}
                autoPlaySpeed={5000}
                customTransition="all 1s"
                autoPlay={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
              >
                {SkillsList.map((skill, index) => (
                  <div key={index}>
                    <img className="skill-language-icon" src={skill.icon} alt="skill" />
                    <h4>{skill.title}</h4>
                    {/* <ProgressBar now={skill.percentage}/>*/}
                    
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
