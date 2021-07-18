import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Logo from '../../assets/icons/logow.jpg';
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Experience</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Logo} alt="My Portfolio Logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Tech Support, IT Teaching</strong>
                    <br />
                    <strong>Duration:</strong> 2017 to Date
                    <br/>
                    <strong> Key Achievements</strong>
                    <ul className="text-left">
                      <li>Built an organization's ICT infrastructure from ground up i.e Networking around the entire organisation, Website design, Domain registration, G-Suit acquisition and configuration, Servers setup etc.</li>
                      <li>Significantly maintained and organized the IT infrastructure functionality to effectively deliver optimal and streamlined services in its daily operations.</li>
                      <li>Maintained the reporting delivery system, to conveniently relay accurate and standard quality reports, meeting aggressive deadlines.</li>
                      <li>Resolved user IT problems, sufficiently backing up crucial data and providing technical assistance within the IT department.</li>
                      <li>Planning and teaching ICT classes in primary school in addition to sponsoring and leading extra-curricular activities, ICDL supervision and coordination. </li>
                      <li>Comprehensively trained users on IT systems and devices, mobilizing available resources, subsequently saving on time and money.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                    <br />
                    <strong>***Check Resume or Linked for work experience***</strong> 
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
