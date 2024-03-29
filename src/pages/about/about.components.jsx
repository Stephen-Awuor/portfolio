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
                <br />Am a hardworking professional who understands how important my work is to my overall happiness. I therefore take my work seriously, collaborate and communicate efficiently with my team members or clients. I grow my skills occasionally inorder to work to the highest standards possibly in my role. 
                <br />
                <br />My mission is to be a better version of myself by overcoming all the challenges that come my way, Then inspire and build others in every possible way.
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
                    <a href="https://drive.google.com/file/d/1G-f8rKVZ4fE15qyx6NY3JXzrfjmOhNIq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
