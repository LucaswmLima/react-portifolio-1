
import { useState, useEffect } from 'react';
import ME from "../assets/img/about/me-about.png";
import { Container, Row, Col } from "react-bootstrap";

export const About = () => {

  return (
    <section className="about" id="about">
        <Container>
          <Row>
            <Col>
              <div className="about-box" id="about-box">
                <h2>Sobre Mim</h2>
                <div className="container about__container">
                  <div className="about__me">
                    <div className="about__me-image">
                      <img src={ME} alt="About Image" />
                    </div>
                  </div>
                  <div className="about__content">
                    <p>
                      Meu nome é Lucas William, sou apaixonado por tecnologia e ciência. Nos meus momentos livres, gosto de jogar, explorar conteúdos sobre astronomia, física e curiosidades do universo. Tenho experiência com desenvolvimento e estou sempre em busca de novos desafios onde eu possa aplicar meu conhecimento para criar soluções criativas e eficientes.
                    </p>
                    <p>
                      Estou sempre aberto a trocar ideias sobre tecnologia, projetos ou colaborações. Sinta-se à vontade para entrar em contato!
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
