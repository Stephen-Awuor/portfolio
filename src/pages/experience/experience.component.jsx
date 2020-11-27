import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_LOGO from "../../assets/img/experience/logo.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Work Experience</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_LOGO} alt="Brookhouse logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Brookhouse International School  (Most Resent)</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">IT Assistant</strong>
                    <br />
                    <strong>Duration:</strong> July 2018 - July 2020
                    <br/>
                    <strong> Some of my duties included; </strong>
                    <ul className="text-left">
                      <li>Technical &amp; Support: I troubleshooted and resolved hardware and software issues on various ICT devices that affect users.</li>
                      <li>Conducted user training sessions for users on use of ICT systems and equipment.</li>
                      <li>Installation and configuration of management information systems and software.
                      </li>
                      <li>Performed systems, software and hardware documentations and kept accurate records and backups of the same.</li>
                      <li>Web intranet updating & General administrative tasks</li>
                      
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                    <br />
                    <strong>***Check Resume or Linked for other experience***</strong> 
                    <br/>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
