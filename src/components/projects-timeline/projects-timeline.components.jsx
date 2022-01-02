import React from "react";
import { Timeline, Events, ImageEvent } from "@merc/react-timeline";

// projects
import L_ACCOMMODATION from "../../assets/img/projects/k-acc5.PNG";
import L_TEC from "../../assets/img/projects/ktec2.PNG";
import L_KJOBS from "../../assets/img/projects/k-jobs1.PNG";
import L_KIS from "../../assets/img/projects/kis.PNG";
import L_G from "../../assets/img/projects/g-writers.PNG";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button'

//skills for project description
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_PHP from "../../assets/img/skills/php.png";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_LARAVEL from "../../assets/img/skills/laravel.png";
import L_MYSQL from "../../assets/img/skills/mysql.png";


import "./projects-timeline.style.css";


function ProjectTimeline() {
    return (
        <div id='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
            <Timeline>
                <Events>
 {/* Project: g-writers */}
                <ImageEvent
                        className="text-center"
                        text="Corporate"
                        src={L_G}
                        alt="G-Writers"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is G-Writers' official website that i built using html, css, javascript, Bootstrap and PhP. Am still working on many more Features.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Organization descriptions, services and a contact form</li>
                                            
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PHP}
                                                                alt="php"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            PhP
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MYSQL}
                                                                alt="mysql"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            MySql
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a href="https://g-writers.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        VIEW ONLINE
                      </Button>
                    </a>
                  </div>
                        </div>
                    </ImageEvent>
                {/* Project: Kinderworld */}
                <ImageEvent
                        className="text-center"
                        text="Education"
                        src={L_KIS}
                        alt="kinderworld"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is Kinderworld International School's official website that i built using html, css, javascript and Bootstrap. Am still working on many more Features.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Organization descriptions</li>
                                                    <li>Online application intergrated with schools LMS</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PHP}
                                                                alt="php"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            PhP
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MYSQL}
                                                                alt="mysql"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            MySql
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a href="https://kis.sc.ke" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        VIEW ONLINE
                      </Button>
                    </a>
                  </div>
                        </div>
                    </ImageEvent>

                {/* Project: Kaneya Tec-Solutions */}
                    <ImageEvent
                        className="text-center"
                        text="Corporate"
                        src={L_TEC}
                        alt="ktec-solutions"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> KTec-solutions.com is an enterprise level website that i built to  provide information about the organization i.e it's services, Location e.t.c.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Oganization description i.e. services, location, contact details, partners</li>
                                                    <li>Secure registration and login portal for clients</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PHP}
                                                                alt="php"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            PhP
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MYSQL}
                                                                alt="mysql"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            MySql
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a href="https://ktecsolutions.herokuapp.com/index.php" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        VIEW ONLINE
                      </Button>
                    </a>
                  </div>
                        </div>
                    </ImageEvent>

                     {/* Project: KJobs */}
                     <ImageEvent
                        className="text-center"
                        text="Corporate"
                        src={L_KJOBS}
                        alt="kjobs"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> K-Jobs is a simple web application that am building using Laravel for any organisation advertise jobs and conduct online recruitments (***In Progress***) 
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Organization descriptions</li>
                                                    <li>Secure registration and login feature before applying for any job</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PHP}
                                                                alt="php"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            PhP
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MYSQL}
                                                                alt="mysql"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            MySql
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a href="https://github.com/Stephen-Awuor/Jobs-Portal" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        SOURCE CODE
                      </Button>
                    </a>
                  </div>
                        </div>
                    </ImageEvent>

                    {/* Project: K-Accommodations */}
                    <ImageEvent
                        className="text-center"
                        text="Hospitality"
                        src={L_ACCOMMODATION}
                        alt="K-ACCOMMODATIONS"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a website/web application that i built to enebale users view hotel rooms, their featurers then they can select their favourite room, register to the system, log-in and book the room.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Hotel description</li>
                                                    <li>Room descriptions</li>
                                                    <li>Registration and login feature before booking</li>
                                                    <li>Email verification before login</li>
                                                    <li>Password reset feature</li>
                                                    <li>Email notifications after a successfull registration, room booking, room cancellation e.t.c.</li>
                                                    <li>Secure admin panel with rights to register a user, remove a user, book a room on behalf of a user, generate reports, view all users e.t.c.</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MYSQL}
                                                                alt="sql"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            MySql
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_LARAVEL}
                                                                alt="laravel"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Laravel
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP}
                                                                alt="bootstrap"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Bootstrap
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a href="https://github.com/Stephen-Awuor/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        SOURCE CODE
                      </Button>
                    </a>
                  </div>
                        </div>
                    </ImageEvent>

                </Events>
            </Timeline>
        </div>
    );
}
export default ProjectTimeline