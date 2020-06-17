import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Accordions } from "./components/AccordionComponent";
import { Followers } from "./components/Follower";
// import boatImage from "./assets/boatImage.jpg";
// import { BsFillCaretDownFill } from "react-icons/bs";

export const Home = () => (
  <Container fluid>
    <Row>
      <Col></Col>
      <Col sm={10}>
        <Accordions />
        <Followers />
        <Row>
          <Col>
            <Accordions />
          </Col>
          <Col>
            <Accordions />
          </Col>
        </Row>
      </Col>
      <Col></Col>
    </Row>
    <Row>
      <Col></Col>
      <Col sm={10}>
        <Accordions />
      </Col>
      <Col></Col>
    </Row>
  </Container>
);
