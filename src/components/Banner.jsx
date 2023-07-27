import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-scroll";
import CV from "../../src/assets/cv.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [", Front-end Developer"];
  const [text, setText] = useState("");
  const period = 2000;
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-itens-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bem vindo(a) ao meu Portfólio</span>
            <h1>
              Olá, sou o Lucas
              <span>{text}</span>
            </h1>
            <p>
              Desenvolvedor formado em engenharia da computação e apaixonado por
              tudo relacionado a tecnologia e ciência. Atualmente a procura de
              uma oportunidade na area.
            </p>
            <Row>
              <Col xs={12} md={6} xl={5}>
                <Link to="connect">
                  <button>
                    Vamos conversar
                    <ArrowRightCircle size={25} />
                  </button>
                </Link>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <a className="download-cv" href={CV} download>
                  <button>
                    Download CV
                    <ArrowRightCircle size={25} />
                  </button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
