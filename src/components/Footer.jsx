import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="footer-logo-col" size={12} sm={6}>
            <img className="footer-logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a
                  target="blank"
                  href="https://www.linkedin.com/in/lucaswmlima/"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  target="blank"
                  href="https://www.facebook.com/Lucaslimacontato"
                >
                  <img src={navIcon2} alt="" />
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/lucaswilliamml/"
                >
                  <img src={navIcon3} alt="" />
                </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}