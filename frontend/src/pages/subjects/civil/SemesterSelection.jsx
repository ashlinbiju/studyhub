import React from 'react';
import { Link } from 'react-router-dom';
import './SemesterSelection.css';  // Import CSS for semester selection styling

function SemesterSelection() {
  return (
    <div className="semester-selection">
      <h1>Select Your Semester</h1>
      <div className="semester-options">
        <Link to="/subjects/civil/s1" className="semester-link">Semester 1</Link>
        <Link to="/subjects/civil/s2" className="semester-link">Semester 2</Link>
        <Link to="/subjects/civil/s3" className="semester-link">Semester 3</Link>
        {/* Add more semesters if needed */}
      </div>
    </div>
  );
}

export default SemesterSelection;
