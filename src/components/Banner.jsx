import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pipe.png";
import { Link } from "react-scroll";
import CV from "../../src/assets/cv.pdf";
import star from "../assets/img/star.png";
import mushroom from "../assets/img/mushroom.png";
import fireFlower from "../assets/img/fire-flower.png";

export const Banner = () => {

  // Função para trocar as imagens que saem pelo cano
  const [imageIndex, setImageIndex] = useState(0);
  const images = [star, mushroom, fireFlower];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // Função para fazer o efeito de digitar
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [" Front-end Developer"];
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
              Olá, sou o Lucas, <br />
              <span>{text}</span>
            </h1>
            <Row className="download-link-row">
              <Col className="download-link-col" xs={12} md={6} xl={4}>
                <Link to="connect">
                  <button>
                    Vamos Conversar
                  </button>
                </Link>
              </Col>
              <Col className="download-link-col" xs={12} md={6} xl={4}>
                <a className="download-cv" href={CV} download>
                  <button>
                    Download CV
                  </button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="pipe-container" xs={12} md={6} xl={5}>
            <img className="pipe-item" src={images[imageIndex]} alt="Imagem" />
            <img className="pipe" src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
