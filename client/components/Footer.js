import React, { useReducer } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Footer = () => {
  
    return (
      <header className="bg-blue">
        <nav>
            <div>
              {/* The navbar will show these links before you log in */}
              <div className="linkHolder">
                <div className="anchor-container">
                  <Link to="/home">Home</Link>
                </div>
                <div className="anchor-container">
                  <Link to="/cart">Cart</Link>
                </div>
                <div className="anchor-container">
                  <Link to="/login">Login / Sign Up</Link>
                </div>
              </div>
            </div>
        </nav>
      </header>
    );
  };
  
  /**
   * CONTAINER
   */
  
  
  export default Footer;