import React from "react";
import { Timeline, Events, ImageEvent } from "@merc/react-timeline";

// projects
import L_TEC from "../../assets/img/projects/webinar.jpg";
import L_PHARMA from "../../assets/img/projects/pharma.PNG";
import L_STUDY from "../../assets/img/projects/study.PNG"
import L_FIXTURES from "../../assets/img/projects/fix.PNG"
import L_CHAT from "../../assets/img/projects/chat.PNG"
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
import L_PYTHON from "../../assets/img/skills/python.png";
import L_SQLITE from "../../assets/img/skills/sqlite.jpg";
import L_MYSQL from "../../assets/img/skills/mysql.png";


import "./projects-timeline.style.css";


function ProjectTimeline() {
    return (
        <div id='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">When free, I contribute to the web....</h1>
            <Timeline>
                <Events>

                      {/* Project: ChatApp */}
                    <ImageEvent
                        className="text-center"
                        text="Chat App"
                        src={L_CHAT}
                        alt="fix"
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
                                                <strong>Description:</strong> The chat app is a real-time messaging platform designed to enable fast, secure, and user-friendly communication between individuals or groups. It allows users to send messages instantly, stay connected across devices, and manage conversations efficiently through a clean and intuitive interface.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>AI-powered assistant (smart replies, message suggestions, or automated responses).</li>
                                                    <li>Real-time messaging.</li>
                                                    <li>One-on-one and group chats.</li>
                                                    <li>Secure, scalable Django backend.</li>
                                                    <li>Message history storage.</li>
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
                                                                src={L_SQLITE}
                                                                alt="sqlite"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            SQLITE
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PYTHON}
                                                                alt="python"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Python
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
                    <a href="https://github.com/Stephen-Awuor/ChatApp/tree/master" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Get code/Contribute
                      </Button>
                    </a>
                  </div>
                        </div>
                    </ImageEvent>


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
                    <a href="https://stephanie-academics.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        View online
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
                        View online
                      </Button>
                    </a>
                  </div>
                        </div>
                    </ImageEvent>

                {/* Project: Adesa Webinar */}
                    <ImageEvent
                        className="text-center"
                        text=""
                        src={L_TEC}
                        alt=""
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
                                            WEBINAR DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                The African Data Engineering and Science Association (ADESA) aspires to be a focal point for data engineering, cyber security and data science practitioners in all parts of Africa, with the ability to empower and inspire professionals in those fields to excel and contribute significantly to the shaping of their work environments and national development. I was honored to present the Impacts of Big Data Analytics on the Kenyan Economy during ADESA Kenya's webinar.
                                                Visit <a href="https://adesa.y-org.com/wp/">ADESA</a>
                                            
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a href="https://drive.google.com/file/d/1hW4pL4ECPqm0EkvbHSLfhiuZYtYAqulu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Watch
                      </Button>
                    </a>
                  </div>
                        </div>
                    </ImageEvent>

                     {/* Project: Pharmain */}
                     <ImageEvent
                        className="text-center"
                        text="Business"
                        src={L_PHARMA}
                        alt="pharma"
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
                                                <strong>Description:</strong> A web-based pharmacy management system for tracking medicines, sales, and customer records through an intuitive dashboard.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Medicine Inventory Management – track stock levels, expiry dates, and restock alerts.</li>
                                                    <li>Sales & Billing – record transactions, generate invoices, and monitor daily sales.</li>
                                                    <li>Customer Records – maintain patient profiles and purchase history for better service.</li>
                                                    <li>User Authentication & Activity Logs – secure login system with activity tracking (logins, actions).</li>
                                                    <li>Reports Dashboard – visualize sales trends, inventory status, and key pharmacy insights.</li>
                                                    
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
                                                                src={L_PYTHON}
                                                                alt="python"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Python
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_SQLITE}
                                                                alt="sqlite"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            SQLite
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a href="https://github.com/Stephen-Awuor/PharmaIn" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Get code/Contribute
                      </Button>
                    </a>
                  </div>
                        </div>
                    </ImageEvent>

                    {/* Project: study budy */}
                    <ImageEvent
                        className="text-center"
                        text="Education"
                        src={L_STUDY}
                        alt="study"
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
                                                <strong>Description:</strong> Study Buddy is a web app I built while learning the Django framework, designed to connect learners through discussion rooms where they can share resources, ask questions, and collaborate on study topics.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>User Authentication – sign up, log in, and manage profiles.</li>
                                                    <li>Discussion Rooms – create, join, and participate in topic-based study rooms.</li>
                                                    <li>Messaging System – real-time style threaded conversations within each room.</li>
                                                    <li>ESearch & Filter – find study rooms and topics easily.</li>
                                                    <li>Profile Management – view user activity, contributions, and interests.</li>
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
                                                                src={L_SQLITE}
                                                                alt="sqlite"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            SQLITE
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PYTHON}
                                                                alt="python"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Python
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
                    <a href="https://github.com/Stephen-Awuor/LetsStudy" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Get code/Contribute
                      </Button>
                    </a>
                  </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Live Score */}
                    <ImageEvent
                        className="text-center"
                        text="Sports"
                        src={L_FIXTURES}
                        alt="fix"
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
                                                <strong>Description:</strong> Livescore is a Django-based web application that manages football teams, fixtures, and match results, providing real-time score updates and an admin dashboard for easy management.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Team Management – add, edit, and organize football teams with details.</li>
                                                    <li>Fixture Scheduling – create and manage upcoming, live, and finished matches.</li>
                                                    <li>Live Score Updates – update and display scores in real-time.</li>
                                                    <li>Admin Dashboard – centralized panel for managing teams, fixtures, and results.</li>
                                                    <li>Reports & Printing – generate match reports and print tables without action columns.</li>
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
                                                                src={L_SQLITE}
                                                                alt="sqlite"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            SQLITE
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PYTHON}
                                                                alt="python"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Python
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
                    <a href="https://github.com/Stephen-Awuor/LiveScores" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Get code/Contribute
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