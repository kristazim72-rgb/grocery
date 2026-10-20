import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ cartCount, searchQuery, onSearchChange }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
    // Automatically navigate to shop if user starts searching from home
    if (window.location.pathname !== '/shop' && e.target.value.trim() !== '') {
      navigate('/shop');
    }
  };

  return (
    <header className="navbar">
      <div className="nav-brand">
        <Link to="/">groceria<span className="dot">.</span></Link>
      </div>
      
      {/* Live Active Search Bar */}
      <div className="nav-search-bar">
        <input 
          type="text" 
          placeholder="Search for grocery, vegetables, spices..." 
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="cart-link-pill">
          🛒 Cart <span className="cart-badge">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;