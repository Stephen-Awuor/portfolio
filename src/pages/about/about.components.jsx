import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import profile from '../../assets/img/profile/profile.png'

import './about.style.css'

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
                <br />A dedicated and versatile ICT and Computing Trainer with a strong background in IT Support and Web Development. I bring a passion for technology and education, with proven experience in delivering engaging computing lessons, providing effective technical support, and building responsive websites. With a solid understanding of both educational and technical environments, I excel at simplifying complex concepts, solving IT issues efficiently, and developing digital solutions that enhance user experience.  
                <br />
                <br />My passion is to contribute to an environment that not only challenges but also rewards the collective efforts of both educators and learners.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1POFIaaRhY4BJMWJh3IilzGtGEdzmVwwe/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Stephen-Awuor/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/stephen-awuor-900b51109" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
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
