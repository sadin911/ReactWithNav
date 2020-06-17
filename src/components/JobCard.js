import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

export const Job = () => (
  <Card style={{ height: "300px", "overflow-y": "auto" }}>
    <Card.Header style={{fontSize:20}}>งานช่าง</Card.Header>
    <Container fluid>
      <Row>
        <Col md='auto'>
          <Card.Img
            variant="top"
            src="khon.jpg"
            style={{ width: "200px", paddingTop: 20 }}
          />
        </Col>
        <Col md='auto'>
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
            style={{ height: "200px", width: "300px", paddingTop: 20 }}
          />
        </Col>
        <Col md='auto' style={{ paddingTop: 20 }}>
          <Card>
            <Card.Header>
              <h4>รายละเอียดงาน</h4>
            </Card.Header>
            <Card.Body style={{maxWidth:'600px'}}>
              <p>
                รับสมัครงาน คนงาน 1. กรรมกร 2.ช่างปูน3. ช่างเชื่อม เหล็ก
                ค่าแรงวันละ 400-500 มีที่พักไห้ต้อง การ 1-2 คนทำงานที่คลอง 10
                เวลางานประมาณ 1-2 เดือน ไครว่าง งานอยุ่ทัก ได้ เลย ครับ ต้อง
                การคนงาน ด่วนๆๆมากๆๆขอบคุณครับ 0800953016 พงครับ
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Card>



);
