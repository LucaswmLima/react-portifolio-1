import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Link } from "react-scroll";
import CV from "../../src/assets/lucas-lima-CV.pdf";
import ME from "../assets/img/home/me.svg"
import video1 from "../assets/img/home/banner-bg.mp4"



export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-end Developer", "Web Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <section className="banner" id="home">
      <Container>
        <div className="video-container">
        <video src={video1} autoPlay loop muted/>
        </div>
      
        <Row className="align-itens-center">
          <Col xs={12} md={8}>
            <h1>
              Olá, sou o Lucas.<br />
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
                <a className="download-cv" href={CV} download="CV-Lucas-William">
                  <button>
                    Download CV
                    <ArrowRightCircle size={25} />
                  </button>
                </a>
              </Col>

            </Row>
          </Col>
          <Col xs={12} md={4} className="side-image-container d-flex justify-content-center" >
            <img src={ME} alt="ME" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
