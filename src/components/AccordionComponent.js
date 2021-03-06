import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import {Job} from "./JobCard"
import * as icons from "react-icons/bs";
export const Accordions = () => (
  <Accordion defaultActiveKey="0" style={{ paddingBottom: 20, paddingTop: 20 , colo:'grey'}}>
    <Card>
      <Card.Header style={{ backgroundColor:'#FFFC'}}>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <h1 style={{alignSelf:'right'}}> <icons.BsStar /> งานแนะนำ</h1>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
       <Job />
      </Accordion.Collapse>
    </Card>
  </Accordion>
);
