import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';  // Assuming Navbar is in the components folder
import Footer from '../components/Footer';  // Assuming Footer is in the components folder
import './BranchSelection.css';  // Styling for the Branch Selection page

function BranchSelection() {
  return (
    <div className="branch-selection-container">
      <Navbar />
      <div className="branch-selection-content">
        <h1>Select Your Branch</h1>
        <div className="branch-buttons">
          <Link to="/subjects/cs" className="branch-btn">Computer Science and Engineering</Link>
          <Link to="/subjects/ece" className="branch-btn">Electronics and Communication Engineering</Link>
          <Link to="/subjects/mech" className="branch-btn">Mechanical Engineering</Link>
          <Link to="/subjects/civil" className="branch-btn">Civil Engineering</Link>
          <Link to="/subjects/eee" className="branch-btn">Electrical and Electronics Engineering</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BranchSelection;
