import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_LOGO from "../../assets/img/experience/logo.jpeg";
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
                <Card.Img variant="top" className="img-resize" src={L_LOGO} alt="Kinderworld logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Kinderworld International School  (Current)</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">ICT Teacher/Support</strong>
                    <br />
                    <strong>Duration:</strong> January 2020 To Date
                    <br/>
                    <strong> Key Achievements</strong>
                    <ul className="text-left">
                      <li>Significantly developed and organized the school's ICT infrastructure functionality to effectively deliver optimal and streamlined services in its daily operations.</li>
                      <li>Maintained the reporting delivery system, to conveniently relay accurate and standard quality reports, meeting aggressive deadlines.</li>
                      <li>Resolved user IT problems, sufficiently backing up crucial data and providing technical assistance within the IT department.</li>
                      <li>Planning and teaching ICT classes in primary school in addition to sponsoring and leading extra-curricular activities, ICDL supervision and coordination. </li>
                      <li>Comprehensively trained users on IT systems and devices, mobilizing available resources, subsequently saving on time and money.</li>
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
