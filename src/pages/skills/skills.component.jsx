import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// skills
import { skills } from "./skills-data";

import "./skills.styles.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">Skills and services</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Web Development</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.web.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Technical Support</Card.Title>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Networks administration</Card.Title>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Teaching</Card.Title>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Data entry, Analysis and Visualization</Card.Title>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Research and report writing</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Cloud technology and cyber security enthusiast</Card.Title>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Windows server administration</Card.Title>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Business Acumen</Card.Title>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Client-centric</Card.Title>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Structural Organization</Card.Title>
              </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Am open for IT Consultancy services and Freelance work</Card.Title>
              </Card.Body>
            </Card>
            </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
