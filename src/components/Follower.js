import React from "react";
import { Accordion, Card, Button, Col, Row } from "react-bootstrap";
import * as icons from "react-icons/bs";
export const Followers = () => (
  <Accordion defaultActiveKey="0" style={{ paddingBottom: 20, paddingTop: 20 }}>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <h1>
            {" "}
            <icons.BsStar /> ผู้ติดตาม{" "}
          </h1>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <div>
          <Row>
            <Col>
              <Card style={{height:300}}>
                <Row>
                  <Col md="auto">
                    <Card.Img
                      src="baifern.jpg"
                      style={{ width: "250px", padding: 20 }}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Text>คุณใบเฟิร์น</Card.Text>
                      <Card.Text>ผู้จัดการ บ.จันว่า จำกัด</Card.Text>
                      <Card.Text>ต้องการกรรมกรซอฟต์แวร์ 5 ตำแหน่ง</Card.Text>
                      <Button variant="danger">ดูประกาศที่ลงไว้</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card style={{height:300}}>
                <Row>
                  <Col md="auto">
                    <Card.Img
                      src="fon.jpg"
                      style={{ width: "250px", padding: 20 }}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Text>คุณฝน</Card.Text>
                      <Card.Text>บ.ขอนคอนกรีค จำกัด</Card.Text>
                      <Card.Text>ต้องการช่างปูนจำนวน 8 อัตรา</Card.Text>
                      <Button variant="danger">ดูประกาศที่ลงไว้</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);
