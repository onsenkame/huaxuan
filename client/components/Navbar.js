import React, { useReducer, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const NavbarComp = ({ handleClick, isLoggedIn, cart, products, isAdmin }) => {
  let items = cart.products || [];
  let cartItems = items.reduce(function (accum, obj) {
    const {
      Order_Product: { quantity },
    } = obj;
    return accum + quantity;
  }, 0);
  let productsLength = products.length;

  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar bg="navbar sticky-top navbar-light bg-light" expand="lg">
      <Container>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/img/huaxuanimg/logotemp.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Huaxuan
          </Navbar.Brand>
        </Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#fanarts"
                className={
                  activeLink === "fanarts"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("fanarts")}
              >
                Fanarts
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#originals"
                className={
                  activeLink === "originals"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("originals")}
              >
                Originals
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#shop"
              className={
                activeLink === "shop" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("shop")}
            >
              Shop
            </Nav.Link>
            <Nav.Link
              href="#info"
              className={
                activeLink === "info" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("info")}
            >
              Info
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.userType === "admin",
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(NavbarComp);
