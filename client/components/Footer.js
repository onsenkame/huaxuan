import React, { useReducer } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Container, Row, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";


const Footer = () => {
  
    return (
      <footer className="footer space">
      <Navbar bg="navbar navbar-light bg-light" expand="lg">
      <Container>
          <Container className="nav-containter">
            <Navbar.Brand href="/">
            <img
                alt=""
                src="/img/huaxuanimg/HuaXuanTitleB.png"
                width=""
                height="60"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#portfolio"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#shop"
              >
                Shop
              </Nav.Link>
              <Nav.Link
                href="#info"
              >
                Info
              </Nav.Link>
              <Nav.Link
                href="#contact"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <a href="https://www.instagram.com/hua.xuann/">
            <img
              alt=""
              src="/img/insta-black.svg"
              width="40"
              height="40"
              className="insta"
            />
          </a>
      </Container>
    </Navbar>
    <p className="center">Copyright Huaxuan 2023</p>
    </footer>
    );
  };
  
  /**
   * CONTAINER
   */
  
  
  export default Footer;