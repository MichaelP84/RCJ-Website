import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
          <div className="navbar-brand">
            <span className="navbar-item">
              RCJTechSolutions
            </span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/service" className="navbar-item">
                Services
              </Link>
              <Link to="/contact" className="navbar-item">
                Contact Us
              </Link>
            </div>
          </div>
      </nav>
    );
  }
}

export default NavBar;
