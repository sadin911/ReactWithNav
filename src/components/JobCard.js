import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

export const Job = () => (
  <Container fluid style={{ height: "600px", overflowY: "auto" }}>
    <Card
      style={{
        height: "300px",
        overflowY: "auto",
        paddingBottom: "10px",
      }}
    >
      <Card.Header style={{ fontSize: 20 }}>งานช่าง</Card.Header>
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
              style={{ height: "200px", width: "300px", paddingTop: 20 }}
            />
          </Col>
          <Col md="auto" style={{ paddingTop: 20 }}>
            <Container>
              <h4>รายละเอียดงาน</h4>
              <Card.Body style={{ maxWidth: "600px" }}>
                <p>
                  รับสมัครงาน คนงาน 1. กรรมกร 2.ช่างปูน3. ช่างเชื่อม เหล็ก
                  ค่าแรงวันละ 400-500 มีที่พักไห้ต้อง การ 1-2 คนทำงานที่คลอง 10
                  เวลางานประมาณ 1-2 เดือน ไครว่าง งานอยุ่ทัก ได้ เลย ครับ ต้อง
                  การคนงาน ด่วนๆๆมากๆๆขอบคุณครับ 0800953016 พงครับ
                </p>
              </Card.Body>
            </Container>
          </Col>
        </Row>
      </Container>
    </Card>

    <Card style={{ height: "300px", overflowY: "auto", paddingTop: "10px" }}>
      <Card.Header style={{ fontSize: 20 }}>งานรับจ้างทั่วไป</Card.Header>
      <Container fluid>
        <Row>
          <Col md="auto">
            <Card.Img
              variant="top"
              src="532553.jpg"
              style={{ width: "200px", paddingTop: 20 }}
            />
          </Col>
          <Col md="auto">
            <Card.Body>
              <Card.Title>กรรมกรซอฟต์แวร์</Card.Title>
              <Card.Text>รายได้ : แล้วแต่ความเทพ</Card.Text>
              <Card.Text>ที่พัก : หาเอง</Card.Text>
              <Card.Text>อาหาร : ซื้อเอง</Card.Text>
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
          <Col md="auto" style={{ paddingTop: 20 }}>
            <Container>
              <h4>รายละเอียดงาน</h4>
              <Card.Body style={{ maxWidth: "600px" }}>
                <p>
                  รับสมัครงานกรรมกร เขียนโปรแกรมซอฟต์แวร์ตามสั่ง หนักเอาเบาสู้
                  มีโบนัสให้ตามความเทพซ่า มาเป็นคู่ผัวเมียก็ได้
                  หรือคู่เกย์เราก็รับ ไม่มีรถรับส่ง แต่มีที่จอดรถให้
                  (ค่าจอดชั่วโมงละ 20)
                </p>
              </Card.Body>
            </Container>
          </Col>
        </Row>
      </Container>
    </Card>
  </Container>
);
