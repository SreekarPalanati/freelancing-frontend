// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#222",
    color: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoImgStyle = {
    height: "50px",
    marginRight: "15px",
    borderRadius: "50%", // Adds a circular effect to your logo if desired
  };

  const navLinksStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "25px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  const hoverEffect = {
    color: "#f39c12", // Add a subtle orange or brand color hover effect
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#f39c12", // Call-to-action color (you can customize)
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  const buttonHoverEffect = {
    backgroundColor: "#e67e22",
  };

  const handleLogout = () => {
    // Logic to handle logout (e.g., clearing user session or token)
    console.log("User logged out");
    // You can redirect the user to the login page or homepage after logout if needed
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <img src="P Groups.jpg" alt="Logo" style={logoImgStyle} />
        <Link to="/" style={{ ...linkStyle, fontSize: "24px", fontWeight: "bold" }}>
          PALANATI SOLUTIONS
        </Link>
      </div>

      <ul style={navLinksStyle}>
        <li>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverEffect.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
