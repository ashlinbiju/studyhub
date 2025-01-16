import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';  // Assuming Navbar is in the components folder
import Footer from '../../../components/Footer';  // Assuming Footer is in the components folder
import './S1.css';  // Import CSS for Semester 1

function S1() {
  return (
    <div className="s1-container">
      <Navbar />
      <div className="s1-content">
        <h1>Select Subject</h1>
        <div className="subject-list">
          <Link to="/subjects/cs/sub1/alg" className="subject">
            Linear Algebra and Calculus
          </Link>
          <Link to="/subjects/cs/sub1/chem" className="subject">
            Engineering Chemistry
          </Link>
          <Link to="/subjects/cs/sub1/graphics" className="subject">
            Engineering Graphics
          </Link>
          <Link to="/subjects/cs/sub1/bce" className="subject">
            Basics of Civil and Mechanical Engineering
          </Link>
          <Link to="/subjects/cs/mews" className="subject">
            Civil and Mechanical Workshop
          </Link>
          <Link to="/subjects/cs/cheml" className="subject">
            Engineering Chemistry Lab
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default S1;
