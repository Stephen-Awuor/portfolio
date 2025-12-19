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
              Hillcrest International School (2024 To Date)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">     
                    <ul className="text-left">
                      <li>Train coding and Digital Literacy across Key Stages, delivering creative, hands-on sessions aligned with international standards.</li>
                      <li>Lead the school's Robotics and Coding Club, mentoring students in programming, robotics challenges, and tech competitions.</li>
                      <li>Initiated and organized school-wide coding events to promote STEM awareness and engagement. </li>
                      <li>Provide pastoral care and academic guidance to a diverse group of students.</li>
                      <li>Collaborate with cross-departmental teams to integrate technology into broader learning experiences. </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>  
            </Card>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              Kinderworld International School (2021-2024)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <ul className="text-left">
                      <li>Provided IT support and oversaw the functionality of the school's ICT infrastructure.</li>
                      <li>Trained coding and Digital Literacy across Key Stages, delivering creative, hands-on sessions aligned with international standards.</li>
                      <li>Contributed to the design, delivery, and continuous improvement of the school’s ICT curriculum.</li>
                      <li>Provided timely, data-driven feedback to support student progress and achievement.</li>                 
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>  
            </Card>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              Brookhouse International School (2018 - 2020)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
      
                    <ul className="text-left">
                    <li>Provided technical support to users both on-site and remotely, ensuring timely resolution of ICT-related issues across the organization. </li>
                    <li>Conducted training sessions for staff and stakeholders on the effective use of ICT systems and equipment.</li>
                    <li>Assisted in the installation, configuration, and maintenance of network infrastructure and ERP systems.</li>
                    <li>Supported data integrity and system security by managing server configurations, backup routines, and access control under the guidance of senior IT leadership.</li>
                    <li>Maintained and monitored ICT devices, contributing to the overall stability and functionality of the institution's IT environment.</li>
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
