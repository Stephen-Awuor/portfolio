import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import profile from '../../assets/img/profile/profile.png'

import './about.style.css'

const education = [
  {
    school: "Strathmore University, Nairobi, Kenya",
    detail: "Master of Science in Information Systems Security — Expected Completion: 2029",
  },
  {
    school: "Kenya School of TVET, Nairobi, Kenya",
    detail: "Diploma in Technical Trainer Education (Computer Studies) — Graduated: 2023",
  },
  {
    school: "Multimedia University of Kenya",
    detail: "Bachelor of Business Information Technology — Graduated: 2017",
  },
];

const About = () => {
    return (
        <div id='about'> 
        <div className="about">
        <h1 className="pt-3 text-center font-details pb-4">About Me</h1>
            <Container>
            <Row className="pt-3 pb-5 align-items-center">
             <Col xs={12} md={6}>
             <Row className="justify-content-center mb-2 mr-2 ">
             <Image className="profile justify-content-end" alt="profile" src={profile} roundedCircle/>
              </Row>
             </Col>
             <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <br />A dedicated, TVET-certified ICT and Computer Science Educator with nearly a decade of experience delivering high-impact digital pedagogy within premier international school environments. Proven track record in designing and executing engaging, inquiry-based computing curricula, with deep specialization in Cambridge IGCSE Computer Science and ICT frameworks.

                     Adept at managing academic EdTech infrastructure, spearheading student STEM and robotics programs, and simplifying advanced technical concepts for diverse learners. Combines an ongoing Master of Science in Information Systems Security with a formal TVET Trainer Diploma to bridge the gap between academic theory, robust industry practices, and cutting-edge digital literacy.
                <br />

                <div className="education-title">Education</div>
                {education.map((item, index) => (
                  <div key={index} className="education-item">
                    <strong>{item.school}</strong>
                    <br />
                    {item.detail}
                  </div>
                ))}

                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>                  
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;