import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';  // Assuming Navbar is in the components folder
import Footer from '../../../components/Footer';  // Assuming Footer is in the components folder
import './SemesterSelection.css';  // Styling for the Semester Selection page

function SemesterSelection() {
  return (
    <div className="semester-selection-container">
      <Navbar />
      <div className="semester-selection-content">
        <h1>Select Your Semester</h1>
        <div className="semester-buttons">
          <Link to="/subjects/cs/s1" className="semester-btn">Semester 1</Link>
          <Link to="/subjects/cs/s2" className="semester-btn">Semester 2</Link>
          <Link to="/subjects/cs/s3" className="semester-btn">Semester 3</Link>
          <Link to="/subjects/cs/s4" className="semester-btn">Semester 4</Link>
          <Link to="/subjects/cs/s5" className="semester-btn">Semester 5</Link>
          <Link to="/subjects/cs/s6" className="semester-btn">Semester 6</Link>
          <Link to="/subjects/cs/s7" className="semester-btn">Semester 7</Link>
          <Link to="/subjects/cs/s8" className="semester-btn">Semester 8</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SemesterSelection;
