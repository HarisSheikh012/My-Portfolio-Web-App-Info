import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div className="header">
    <Link to="/">
    <img src="images/logo.jpg" alt="our name logo" className="logo" />
    </Link>
    <nav className="navbar">
        <ul className="navbar-lists">
            <li><Link to="/" className="navbar-link home-link">Home</Link></li>
            <li><Link to="about" className="navbar-link about-link">About</Link></li>
            <li><Link to="/portfolio" className="navbar-link portfolio-link">Portfolio</Link></li>
            <li><Link to="/services" className="navbar-link service-link">Services</Link></li>
            <li><Link to="/contact" className="navbar-link contact-link">Contact</Link></li>
        </ul>
    </nav>
    </div>
  );
}

export default Header;
