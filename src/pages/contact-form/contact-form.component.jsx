import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">Contact Me</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:stevekaneya@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="stevekaneya@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email - stevekaneya@gmail.com
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/stephen-awuor-900b51109" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://wa.me/254729952303" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-success" title="let's chat">
                  <i className="fab fa-github-square"></i> WhatsApp
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/kaneya_steve" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
                <Button variant="outline-info">
                  <i className="fab fa-twitter"></i> Call: +254729952303
                </Button>  
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
