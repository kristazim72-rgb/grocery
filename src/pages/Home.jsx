import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
  
      <div className="hero-section">
        <div className="hero-text-content">
          <span className="hero-tag">FRESH HARVEST DAILY</span>
          <h1 className="hero-title">From the farm<br />to your kitchen</h1>
          <p className="hero-description">
            Discover the freshest produce and groceries delivered directly to your doorstep.
          </p>
          <Link to="/shop" className="hero-cta-btn">
            Shop Collection ➔
          </Link>
        </div>

        <div className="hero-floating-badge">
          <span className="badge-title">20% OFF</span>
          <p>On your first organic basket</p>
        </div>
      </div>
  
  );
};

export default Home;