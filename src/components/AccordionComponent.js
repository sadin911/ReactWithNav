import React from "react";
import { Accordion, Card, Button, Col, Row, Container } from "react-bootstrap";

export const Accordions = () => (
  <Accordion defaultActiveKey="0" style={{ paddingBottom: 20, paddingTop: 20 }}>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <h1>งานแนะนำสำหรับคุณ</h1>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card style={{ height: "250px", "overflow-y": "auto" }}>
          <Container fluid>
            <Row>
              <Col md="auto">
                <Card.Img
                  variant="top"
                  src="khon.jpg"
                  style={{ width: "200px", paddingTop: 20 }}
                />
              </Col>
              <Col md="auto">
                <Card.Body>
                  <Card.Title>งานช่างอิฐ</Card.Title>
                  <Card.Text>รายได้ : 400-500 บาท/วัน</Card.Text>
                  <Card.Text>ที่พัก : ฟรี</Card.Text>
                  <Card.Text>อาหาร : กลางวัน</Card.Text>
                  <Button variant="primary">สนใจสมัครงาน คลิ๊ก</Button>
                </Card.Body>
              </Col>
              <Col>
                <Card.Img
                  variant="top"
                  src="map.jpg"
                  style={{ height: "200px", paddingTop: 20 }}
                />
              </Col>
            </Row>
          </Container>
        </Card>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);
