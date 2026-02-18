import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to E-Commerce Store</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="cta-button">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
