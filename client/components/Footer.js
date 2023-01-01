import React, { useReducer } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  
    return (
      <footer className="footer">
      <Container className="bg-dark text-white">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></a>
              <a href="#"><img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></a>
              <a href="#"><img
              alt=""
              src="/img/nav-icon3.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
  };
  
  /**
   * CONTAINER
   */
  
  
  export default Footer;