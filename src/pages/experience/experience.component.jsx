import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  const tiltOptions = { max: window.innerWidth < 768 ? 0 : 25 };

  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Work Experience & Achievements</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={tiltOptions}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                Computing and ICT Educator – Hillcrest International School (Sept 2024 – Present)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <ul className="text-left">
                      <li><strong>Curriculum Design, Alignment and Instruction:</strong> Design and deliver creative, hands-on ICT and Computing curricula across Key Stages, ensuring strict alignment with rigorous international standards.</li>
                      <li><strong>STEM Curriculum Expansion:</strong> Expanded the practical computing curriculum by leading the school's Robotics and Coding Club, mentoring students through advanced programming and competitive tech challenges.</li>
                      <li><strong>Pastoral Care:</strong> Serve as a co-form tutor, providing critical pastoral care and academic guidance to a diverse student body.</li>
                      <li><strong>Cross-Departmental Collaboration:</strong> Collaborate with cross-departmental teams to seamlessly integrate technology into broader learning experiences.</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                Computing, ICT Educator & Network Admin – Kinderworld International School (Jan 2021 – Aug 2024)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <ul className="text-left">
                      <li><strong>Infrastructure Management:</strong> Overhauled and maintained the school's ICT infrastructure, improving learning resource uptime to 99% and enhancing digital accessibility for over 300 students and staff.</li>
                      <li><strong>Curriculum Delivery:</strong> Trained ICT to KS2 and KS3 students using engaging, interactive methods and a wide range of educational technologies to drive digital literacy.</li>
                      <li><strong>Student Engagement:</strong> Successfully established and coordinated the Computer Science Club for 20+ students, designing interactive coding and robotics projects that boosted weekly student engagement by 40%.</li>
                      <li><strong>Academic Assessment:</strong> Provided timely, data-driven feedback and assessment to support student progress.</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                IT Technician – Brookhouse International School (Jan 2018 – Dec 2020)
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <ul className="text-left">
                      <li><strong>Network Optimization:</strong> Overhauled and optimized the campus network infrastructure and ERP systems, reducing system downtime by 20% to streamline daily academic and administrative operations.</li>
                      <li><strong>Technical Support & Resolution:</strong> Provided rapid on-site and remote technical support for over 50 users weekly, maintaining a 95% user satisfaction rate across school staff.</li>
                      <li><strong>Staff Training & Enablement:</strong> Designed and conducted comprehensive IT systems training sessions for staff and stakeholders, maximizing resource utilization and reducing internal tech support tickets by 15%.</li>
                      <li><strong>Data Security & Integrity:</strong> Supported data integrity and system security by managing server configurations, executing robust backup routines, and enforcing strict access control protocols.</li>
                      <li><strong>Asset Management:</strong> Maintained and monitored institutional ICT devices, ensuring the long-term stability, functionality, and security of the school's tech environment.</li>
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