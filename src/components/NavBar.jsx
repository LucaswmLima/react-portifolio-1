import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/navbar/Logo.png";
import navIcon1 from "../assets/img/navbar/nav-icon1.svg";
import navIcon2 from "../assets/img/navbar/nav-icon2.svg";
import navIcon3 from "../assets/img/navbar/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Função para fechar a Navbar quando clicar fora dela
    function handleOutsideClick(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbarExpanded(false);
      }
    }

    // Adicione um ouvinte de eventos para detectar cliques fora da Navbar
    document.addEventListener("mousedown", handleOutsideClick);

    // Limpe o ouvinte de eventos quando o componente for desmontado
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar
        ref={navbarRef}
        expanded={navbarExpanded}
        expand="lg"
        className={scrolled ? "scrolled" : ""}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setNavbarExpanded(!navbarExpanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                Sobre Mim
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Habilidades
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projetos
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
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
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Vamos Conversar</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
