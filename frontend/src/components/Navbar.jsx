import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">STUDYHUB</Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">Home</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
