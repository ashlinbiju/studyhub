import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Navbar from '../../../../components/Navbar'; // Assuming Navbar exists here
import Footer from '../../../../components/Footer'; // Assuming Footer exists here
import './alg.css'; // CSS for Linear Algebra and Calculus

function LinearAlgebraAndCalculus() {
  return (
    <div className="alg-container">
      <Navbar />
      <div className="alg-content">
        <h1>Linear Algebra and Calculus</h1>
        <h2>Modules</h2>
        <div className="modules-list">
          <Link to="/subjects/cs/sub1/a1" className="module-button">
            <button>Module 1</button>
          </Link>
          <Link to="/subjects/cs/sub1/a2" className="module-button">
            <button>Module 2</button>
          </Link>
          <Link to="/subjects/cs/sub1/a3" className="module-button">
            <button>Module 3</button>
          </Link>
          <Link to="/subjects/cs/sub1/a4" className="module-button">
            <button>Module 4</button>
          </Link>
          <Link to="/subjects/cs/sub1/a5" className="module-button">
            <button>Module 5</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LinearAlgebraAndCalculus;
