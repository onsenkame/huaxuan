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
    <Navbar bg="navbar navbar-light bg-light" expand="lg">
      <Container>
          <Container className="nav-containter">
            <Navbar.Brand href="/">
              {/* <img
                alt=""
                src="/img/huaxuanimg/HuaXuanppf.png"
                width="60"
                height="60"
                className="d-inline-block align-top"
              /> */}
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
                href="/#portfolio"
                className={
                  activeLink === "portfolio"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("portfolio")}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="/#shop"
                className={
                  activeLink === "shop" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("shop")}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                href="/#info"
                className={
                  activeLink === "info" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("info")}
              >
                Info
              </Nav.Link>
              <Nav.Link
                href="/#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="/conventions"
                className={
                  activeLink === "conventions"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("conventions")}
              >
                Conventions
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <a href="https://www.instagram.com/hua.xuann/" target="_blank">
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
