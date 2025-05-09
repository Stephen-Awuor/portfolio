import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// skills


import "./skills.styles.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">Competencies</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          <Col md={4}>
              <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">ICT, Computing and Digital Literacy Trainer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Web Development (HTML, JS and CSS), (Currently Learning Python & Django)</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Computer Networks</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">IT Support</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Robotics & STEM Tools (e.g., LEGO EV3, LEGO SPIKE, micro:bit)</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Leadership and Mentorship</Card.Title>
              </Card.Body>
            </Card>
            </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
