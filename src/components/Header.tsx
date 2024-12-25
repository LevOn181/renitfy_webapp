import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Automatically close the sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false); // Close the sidebar for screens larger than 768px
      }
    };

    // Attach the resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <button
        className="hamburger"
        onClick={toggleSidebar}
        aria-expanded={sidebarOpen}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <div className="headerBar">
        <a href="http://localhost:8000">
          <h1 className="logo">Rentify</h1>
        </a>
        <nav className={`nav-links ${sidebarOpen ? "active" : ""}`}>
          {sidebarOpen && (
            <button className="close-btn" onClick={toggleSidebar}>
              ✕
            </button>
          )}
          <a href="/login">Log In</a>
          <a href="/register">Register</a>
          <a href="/advertise">Advertise</a>
        </nav>
      </div>
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </header>
  );
};

export default Header;
