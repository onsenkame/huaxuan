import React, { useReducer } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComp = ({ handleClick, isLoggedIn, cart, products, isAdmin }) => {
  let items = cart.products || [];
  let cartItems = items.reduce(function (accum, obj) {
    const {
      Order_Product: { quantity },
    } = obj;
    return accum + quantity;
  }, 0);
  let productsLength = products.length;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
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
              <h1> Fanarts </h1>
              <NavDropdown.Item href="#portfolio/genshin">
                Genshin Impact
              </NavDropdown.Item>
              <NavDropdown.Item href="#portfolio/league">
                League of Legends
              </NavDropdown.Item>
              <NavDropdown.Item href="#portfolio/anime">Anime</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#portfolio/originals">
                Originals
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#portfolio/commissions">
                Commissions
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#info">Info</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
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
