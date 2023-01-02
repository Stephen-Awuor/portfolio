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
              Kinderworld International School - ICT/Computer Science Teacher, IT Officer (2021 To Date)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                  
                    <ul className="text-left">
                      <li>Successfully built an entire organization's ICT infrastructure from ground up, This improved efficienncy of operations by 90% i.e Networking around the entire organisation, Website design, Domain registration, G-Suit acquisition and configuration, System Installation and administration.</li>
                      <li>Significantly maintained and organized the organization's IT infrastructure functionality</li>
                      <li>Over the years I successfully provided technical support to multiple users and fixed critical issues that directly affect production. </li>
                      <li>Contributing to the design, delivery and future planning and development of school's ICT curriculum.</li>
                      <li>Planned and tought ICT/Computer Science lessons to KS2 & KS3 students in addition to sponsoring and leading extra-curricular activities, ICDL supervision and co-ordination. </li>
                      <li>Provide timely feedback to students and utilize a data driven approach to teaching and learning.</li>
                      <li>Develop assessment tasks using a wide range of formative assessment tools and keeping records.</li>
                      <li>Comprehensively conducted trainings on ICT awareness, mobilizing available resources, subsequently saving on time and money. I have achieved this through hosting of webinars and trainings sessions</li>
                 
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>  
            </Card>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              Brookhouse International School - IT Support Technician (2017-2020)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                  
                    <ul className="text-left">
                      <li>Performed network setup, added new devices to the network, allocating IP addresses to network devices, and connecting computers and devices to the network</li>
                      <li>Troubleshooted and resolved network problems such as time-outs, non- functional network devices, conflicting IP addresses as well as faulty cables.</li>
                      <li>Installed and configured management information systems and software.</li>
                      <li>Conducted user training sessions for all stakeholders on use of ICT systems and equipment.</li>
                      <li>Conducted user support on ICT issues.</li>
                      <li>Installed and maintained CCTV cameras.</li>
                      <li>Generated periodic reports, maintained accurate records ran backups.</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>  
            </Card>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              Hartlane Pharmaceuticals Ltd - Cashier (2017)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
      
                    <ul className="text-left">
                    <li>Received payments and processing receipts to customers. </li>
                    <li>Maintained the petty cash book.</li>
                    <li>Resolved customers’ queries to uphold the integrity of the organization, attract new/maintain clients</li>
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
