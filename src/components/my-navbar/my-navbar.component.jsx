import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/logow.jpg';
import './my-navbar.style.css';

const MyNavbar = () => {
    return (
        <>
<Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
  <Navbar.Brand href="#home">
      <img className="logo" src={Logo} alt='My Portfolio Logo' />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#skills">COMPETENCIES</Nav.Link>
      <Nav.Link href="#experience">EMPLOYMENT</Nav.Link>
      <Nav.Link href="#projects">TECH</Nav.Link>
      <Nav.Link href="#contact">CONTACT</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}
export default MyNavbar