import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #ccc;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;

    &:hover {
      color: black;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" stricky="top">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Row>
            <Col sm={0}>
              <Image
                src="profile.jpg"
                roundedCircle
                variant="top"
                style={{ height: "100px" }}
              />
            </Col>
            <Col>
              <p style={{ color: "black", fontSize: 28, borderSpacing: 0 }}>
                ชลทิศ ดีระดา
              </p>
              <p style={{ color: "black", fontSize: 16, borderSpacing: 0 }}>
                sadin911@live.com
              </p>
            </Col>
          </Row>
        </Container>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/" style={{ fontSize: 20 }}>
                หน้าหลัก
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about" style={{ fontSize: 20 }}>
                เกี่ยวกับเรา
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact" style={{ fontSize: 20 }}>
                ติดต่อเรา
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
