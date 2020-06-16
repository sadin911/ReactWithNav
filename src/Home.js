import React from "react";
import { Accordion, Card, Button, Col, Row, Container } from "react-bootstrap";
import { Accordions } from "./components/AccordionComponent";
// import boatImage from "./assets/boatImage.jpg";
// import { BsFillCaretDownFill } from "react-icons/bs";

export const Home = () => (
  <Container fluid>
    <Accordions />
    <Accordions />
    <Row>
      <Col>
        <Accordions />
      </Col>
      <Col>
        <Accordions />
      </Col>
    </Row>
    <Row>
      <Col>
        <Accordions />
      </Col>
      <Col>
        <Accordions />
      </Col>
    </Row>
  </Container>
);
