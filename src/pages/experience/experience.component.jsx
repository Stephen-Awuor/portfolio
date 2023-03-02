import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Work Experience & Achievements</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              Kinderworld International School - ICT/Computer Science Tutor, Network Admin. (2020 To Date)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">     
                    <ul className="text-left">
                      <li>Successfully built the entire organization's ICT infrastructure from ground up, This improved efficienncy of operations by 99%.</li>
                      <li>Implementing data backups, Network security blueprients and monitoring/updating firewalls.</li>
                      <li>Providing technical support to multiple users and fixing critical issues that directly affect operations. </li>
                      <li>Contributing to the design, delivery and future planning and development of school's ICT curriculum.</li>
                      <li>Planning and teaching ICT/Computer Science lessons to KS2 & KS3 students in addition to sponsoring and leading extra-curricular activities, ICDL supervision and co-ordination. </li>
                      <li>Providing timely feedback to students and utilizing a data driven approach to teaching and learning.</li>
                      <li>Developing assessment tasks using a wide range of formative assessment tools and keeping records.</li>
                      <li>Comprehensively conducting trainings on ICT awareness, mobilizing available resources. I have achieved these through hosting of webinars and trainings sessions</li>    
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>  
            </Card>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              Brookhouse International School - IT Assistant (2017-2020)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <ul className="text-left">
                      <li>Performed network troubleshooting and maintainance.</li>
                      <li>Installed and configured management information systems and software.</li>
                      <li>Conducted IT support and training sessions for all stakeholders on use of ICT systems and equipment.</li>              
                      <li>Generated periodic reports, and maintained backups.</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>  
            </Card>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              Postal Communication Of Kenya - IT Intern (2017)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
      
                    <ul className="text-left">
                    <li>Successfully carried out IT user support </li>
                    <li>Installed, troubleshooted and maintained software systems.</li>
                    <li>Prepared, generated reports and backed up data as instructed by supervisors.</li>
                    </ul>
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
