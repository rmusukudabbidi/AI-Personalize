import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import logo2 from './images/logo2.png';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo2} alt="Logo" className='logo'/> 
        </NavLink>
        <div className="navbar-toggler" onClick={toggleMobileMenu}> 
          <span className="navbar-toggler-icon">☰</span>
        </div>
        <div className={`navbar-collapse ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={toggleMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/content" onClick={toggleMobileMenu}>
                Content
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/taxonomy" onClick={toggleMobileMenu}>
                Taxonomy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team" onClick={toggleMobileMenu}>
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/references" onClick={toggleMobileMenu}>
                References
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
