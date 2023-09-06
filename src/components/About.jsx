
import { useState, useEffect } from 'react';
import ME from "../assets/img/about/me-about.jpg";
import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  const [bgColor, setBgColor] = useState('#212E3F');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400 && window.scrollY < 1200) {
        setBgColor('#BDC961');
      } else {
        setBgColor('#212E3F');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyle = {
    backgroundColor: bgColor,
    transition: 'background-color 0.5s ease'
  };

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <div className="about-box" id="about-box" style={containerStyle}>
              <h2>Sobre Mim</h2>
              <div className="container about__container">
                <div className="about__me">
                  <div className="about__me-image">
                    <img src={ME} alt="About Image" />
                  </div>
                </div>
                <div className="about__content">
                  <p>
                    Meu nome é Lucas William, e sou um entusiasta da tecnologia
                    e da ciência. Nos meus momentos livres, me divirto jogando
                    games e assistindo vídeos sobre astronomia, fisica e
                    curiosidades. Atualmente, estou em busca de uma oportunidade
                    na área de desenvolvimento, onde posso aplicar meu
                    conhecimento para criar soluções inovadoras.
                    </p>
                    <p>
                      Hoje já tenho conhecimento em tecnologias como JavaScript,
                      ReactJS, SQL, Flutter, entre outras.
                    </p>
                    <p>
                      Se estiver interessado em discutir oportunidades de
                      emprego ou colaborações profissionais, fique à vontade
                      para entrar em contato comigo.
                    </p>
                  
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
