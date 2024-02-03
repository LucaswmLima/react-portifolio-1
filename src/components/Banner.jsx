import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-scroll";
import CV from "../../src/assets/lucas-lima-CV.pdf";
import ME from "../assets/img/home/me.svg";

export const Banner = () => {
  const [text, setText] = useState("");
  const [speedTyping, setSpeedTyping] = useState(90); // Velocidade de digitação
  const [speedErasing, setSpeedErasing] = useState(20); // Velocidade de apagada

  const TypingEffect = async () => {
    const phrases = [
      "Olá, sou o Lucas.",
      "Full-Stack Developer.",
      "Transformo ideias em código.",
    ];

    for (let i = 0; i < phrases.length; i++) {
      const phrase = phrases[i];

      // Digitação
      for (let j = 0; j <= phrase.length; j++) {
        setText(phrase.substring(0, j));
        await new Promise((resolve) => setTimeout(resolve, speedTyping));
      }

      // Aguarda antes de apagar
      await new Promise((resolve) => setTimeout(resolve, 700));

      // Apagada
      for (let k = phrase.length; k >= 0; k--) {
        setText(phrase.substring(0, k));
        await new Promise((resolve) => setTimeout(resolve, speedErasing));
      }

      // Aguarda antes de passar para a próxima frase
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    // Reinicia o loop após exibir todas as frases
    TypingEffect();
  };

  useEffect(() => {
    TypingEffect();

    // Cleanup da função de efeito
    return () => {
      // Faça a limpeza necessária, se aplicável
    };
  }, []); // Executa apenas uma vez durante a montagem do componente

  return (
    <section className="banner" id="home">
      <Container className="banner-container">
        <Row className="align-itens-center h-100">
          <Col
            xs={12}
            md={8}
            className="d-flex flex-column justify-content-between"
          >
            <h1>
              <span>{text}</span>
            </h1>
            <Row className="download-link-row">
              <Col className="download-link-col" xs={12} md={6} xl={4}>
                <Link to="connect">
                  <button>
                    Vamos Conversar
                    <ArrowRightCircle size={25} />
                  </button>
                </Link>
              </Col>
              <Col className="download-link-col" xs={12} md={6} xl={4}>
                <a
                  className="download-cv"
                  href={CV}
                  download="CV-Lucas-William"
                >
                  <button>
                    Download CV
                    <ArrowRightCircle size={25} />
                  </button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={4}
            className="side-image-container d-flex justify-content-center"
          >
            <img src={ME} alt="ME" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
