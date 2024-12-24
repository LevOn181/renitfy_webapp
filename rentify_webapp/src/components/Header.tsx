import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Rentify</h1>
      <nav className="nav-links">
        <a href="/login">Log In</a>
        <a href="/register">Register</a>
        <a href="/advertise">Advertise Your Property</a>
      </nav>
    </header>
  );
};

export default Header;
