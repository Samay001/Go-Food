import React, { useState } from 'react';
import './style/header.css';
import { FaHome, FaSearch, FaBell, FaUser, FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <a className="brand" href="#">
        GO FOOD
      </a>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="icons">
        <span className="icon"><FaHome /></span>
        <span className="icon"><FaSearch /></span>
        <span className="icon"><FaBell /></span>
        <span className="icon"><FaUser /></span>
        <span className="toggle" onClick={toggleMenu}><FaBars /></span>
      </div>
    </nav>
  );
};

export default Header;
