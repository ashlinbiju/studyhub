import React from 'react';
import Navbar from '../../../../components/Navbar'; // Assuming Navbar exists here
import Footer from '../../../../components/Footer'; // Assuming Footer exists here
import './a1.css'; // Using the same CSS file as a1

function A3() {
  return (
    <div className="module-page">
      <Navbar />
      <div className="module-content">
        <h1>Syllabus</h1>
      </div>
      <Footer />
    </div>
  );
}

export default A3;
