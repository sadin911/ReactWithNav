import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Accordions } from "./components/AccordionComponent";
// import boatImage from "./assets/boatImage.jpg";
// import { BsFillCaretDownFill } from "react-icons/bs";

export const Home = () => (
  <Container fluid>
    <Row>
      <Col></Col>
      <Col sm={8}>
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
        <Row className="justify-content-md-center">
          <Accordions />
        </Row>
      </Col>
      <Col></Col>
    </Row>
  </Container>
);
