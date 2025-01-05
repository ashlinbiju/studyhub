import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Ensure this path is correct
import './index.css';  // Ensure this file exists and has minimal styling, like body { margin: 0; }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
