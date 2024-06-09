import React, { useState } from 'react';
import './style/header.css';
import { FiHome, FiSearch,FiMenu, FiChevronDown,FiArrowRight, FiHeart, FiShoppingBag } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#" className="brand">
        <span className="go-text">GO</span> FOOD
      </a>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#">Home <FiChevronDown className="dropdown-icon" /></a></li>
          <li><a href="#">Groceries <FiChevronDown className="dropdown-icon" /></a></li>
          <li><a href="#">Pages <FiChevronDown className="dropdown-icon" /></a></li>
          <li className='specialText'><a href="#">Connect with us <FiArrowRight className="dropdown-icon" /></a></li>
        </ul>
      </div>
      <div className="icons">
        <span className="icon"><FiSearch /></span>
        <span className="icon"><FiHome /></span>
        <span className="icon"><FiHeart /></span>
        <span className="icon"><FiShoppingBag /></span>
        <span className="toggle" onClick={toggleMenu}><FiMenu /></span>
      </div>
      {/* <span className="notification-circle notification-circle--1">5</span>
      <span className="notification-circle notification-circle--2">5</span> */}
    </nav>
  );
};

export default Header;
