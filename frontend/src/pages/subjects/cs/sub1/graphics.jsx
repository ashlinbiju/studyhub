import React from 'react';
import Navbar from '../../../../components/Navbar'; // Assuming Navbar exists here
import Footer from '../../../../components/Footer'; // Assuming Footer exists here
import './bce.css'; // CSS for Linear Algebra and Calculus

function Graphics() {
  return (
    <div className="alg-container">
      <Navbar />
      <div className="alg-content">
        <h1>Linear Algebra and Calculus</h1>
        <h2>Modules</h2>
        <div className="modules-list">
          <div className="module">
            <h3>Module 1</h3>
          </div>
          <div className="module">
            <h3>Module 2</h3>
          </div>
          <div className="module">
            <h3>Module 3</h3>
          </div>
          <div className="module">
            <h3>Module 4</h3>
          </div>
          <div className="module">
            <h3>Module 5</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Graphics;
