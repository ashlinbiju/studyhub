import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';  // Assuming Navbar is in the components folder
import Footer from '../components/Footer';  // Assuming Footer is in the components folder
import './Home.css';  // Styling for the Home page

function Home() {
  
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h1 className="home-heading">Welcome to StudyHub</h1>
        <p className="home-description">Your one-step access to all study materials.</p>
        <Link to="/branch-selection" className="btn-branch-selection">Select Branch</Link>
      </div>
      <Footer />
    </div>
  );
}


export default Home;
