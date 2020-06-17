import React from "react";
import { Container , Card} from "react-bootstrap";

export const Layout = (props) => (
  <Container fluid className="justify-content-md-center" style={{ height: "75vh", "overflow-y": "auto" }}>
    {props.children}
  </Container>
);
