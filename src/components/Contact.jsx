import { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const initialStatus = {
    success: false,
    massage: '',

  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState(initialStatus);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formDetails.name === "" ||
      formDetails.email === "" ||
      formDetails.message === ""
    ) {
      setStatus({
        success: false,
        message: "Preencha todos os campos!",
      });
      return;
    }

    setButtonText("Enviando...");

    const templateParams = {
      from_name: formDetails.name,
      email: formDetails.email,
      message: formDetails.message,
    };
    emailjs
      .send(
        "service_hjsj533",
        "template_5dbr4kr",
        templateParams,
        "H7F7U3_nqelN9vopT"
      )
      .then(
        (response) => {
          setFormDetails(formInitialDetails);
          setButtonText("Enviar");
          console.log("E-Mail enviado", response.status, response.text);
          setStatus({
            success: true,
            message: "Mensagem enviado com sucesso!",
          });
        },
        (error) => {
          console.log("E-Mail não enviado! Erro: ", error);
          setStatus({
            success: false,
            message: "Algo de errado aconteceu, por favor tente mais tarde.",
          });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col md={6}>
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.name}
                    placeholder="Nome"
                    onChange={(e) => onFormUpdate("name", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="E-Mail"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Mensagem"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                <Col className="px-1">
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
