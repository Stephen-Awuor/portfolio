import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./skills.styles.css";

const competencies = [
  "ICT, Computing and Digital Literacy Training",
  "Web Development (HTML, JS, Python, CSS and Django Framework)",
  "Information Systems Security - Fundamentals",
  "IT Support",
  "Robotics & STEM Tools (e.g., LEGO EV3, LEGO SPIKE, micro:bit)",
  "Leadership and Mentorship",
];

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">Competencies</h1>
      <Row className="g-4 justify-content-center px-3">
        {competencies.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="d-flex">
            <Card className="focus mt-2 mb-2 w-100">
              <Card.Body className="d-flex align-items-center justify-content-center">
                <Card.Title className="text-center card-title mb-0">
                  {item}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;