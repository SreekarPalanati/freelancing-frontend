// // src/components/Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const navbarStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "15px 30px",
//     backgroundColor: "#222",
//     color: "#fff",
//     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//     position: "sticky",
//     top: 0,
//     zIndex: 1000,
//   };

//   const logoStyle = {
//     display: "flex",
//     alignItems: "center",
//   };

//   const logoImgStyle = {
//     height: "50px",
//     marginRight: "15px",
//     borderRadius: "50%", // Adds a circular effect to your logo if desired
//   };

//   const navLinksStyle = {
//     display: "flex",
//     listStyle: "none",
//     margin: 0,
//     padding: 0,
//     gap: "25px",
//   };

//   const linkStyle = {
//     color: "white",
//     textDecoration: "none",
//     fontSize: "18px",
//     fontWeight: "500",
//     transition: "color 0.3s ease",
//   };

//   const hoverEffect = {
//     color: "#f39c12", // Add a subtle orange or brand color hover effect
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#f39c12", // Call-to-action color (you can customize)
//     borderRadius: "5px",
//     fontSize: "18px",
//     fontWeight: "bold",
//     color: "#fff",
//     textDecoration: "none",
//     transition: "background-color 0.3s ease",
//   };

//   const buttonHoverEffect = {
//     backgroundColor: "#e67e22",
//   };

//   return (
//     <nav style={navbarStyle}>
//       <div style={logoStyle}>
//         <img src="PT.png" alt="Logo" style={logoImgStyle} />
//         <Link to="/" style={{ ...linkStyle, fontSize: "24px", fontWeight: "bold" }}>
//         PALANATI TECHNOLOGIES
//         </Link>
//       </div>

//       <ul style={navLinksStyle}>
//         <li>
//           <Link
//             to="/"
//             style={linkStyle}
//             onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
//             onMouseOut={(e) => (e.target.style.color = "white")}
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/about-us"
//             style={linkStyle}
//             onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
//             onMouseOut={(e) => (e.target.style.color = "white")}
//           >
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/services"
//             style={linkStyle}
//             onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
//             onMouseOut={(e) => (e.target.style.color = "white")}
//           >
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/contact-us"
//             style={linkStyle}
//             onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
//             onMouseOut={(e) => (e.target.style.color = "white")}
//           >
//             ContactUs
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/login-signup"
//             style={buttonStyle}
//             onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverEffect.backgroundColor)}
//             onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
//           >
//             Let's Connect !!
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("dark"); // Default theme is dark

  // Define styles based on the theme
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 15px", // Reduced padding for smaller navbar
    background: theme === "dark"
      ? "linear-gradient(90deg, #1d2671 0%, #c33764 100%)" // Dark mode gradient
      : "linear-gradient(90deg, #f79d65 0%, #fbc7d4 100%)", // Light mode gradient
    color: theme === "dark" ? "#fff" : "#000",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Softer shadow for depth
    transition: "all 0.3s ease", // Smooth transition when theme changes
    fontSize: "16px", // Reduced font size for a compact look
    '@media (max-width: 768px)': {
      padding: '6px 10px', // Adjust padding for mobile screens
    },
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease", // Hover scaling effect
    '@media (max-width: 768px)': {
      fontSize: '14px', // Smaller font size for mobile screens
    },
  };

  const logoImgStyle = {
    height: "30px", // Smaller logo size
    marginRight: "8px",
    borderRadius: "50%", // Circular logo for a sleek look
    '@media (max-width: 768px)': {
      height: "24px", // Smaller logo size for mobile screens
    },
  };

  const logoTextStyle = {
    fontSize: "18px", // Adjusted font size for compact logo
    fontWeight: "bold",
    letterSpacing: "1.2px",
    color: theme === "dark" ? "#fff" : "#000",
    textTransform: "uppercase",
    transition: "color 0.3s ease",
  };

  const logoHoverStyle = {
    transform: "scale(1.1)", // Slight scaling on hover
    color: theme === "dark" ? "#f39c12" : "#e67e22", // Consistent hover color
  };

  const navLinksStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "20px", // Reduced gap for a smaller navbar
    '@media (max-width: 768px)': {
      gap: "10px", // Smaller gap for mobile screens
      fontSize: '14px', // Smaller font size for mobile
    },
  };

  const linkStyle = {
    color: theme === "dark" ? "#fff" : "#000",
    textDecoration: "none",
    fontSize: "24px", // Increased font size for links
    fontWeight: "bold",
    transition: "color 0.3s ease",
    '@media (max-width: 768px)': {
      fontSize: '18px', // Adjust link size for mobile
    },
  };

  const hoverEffect = {
    color: theme === "dark" ? "#f39c12" : "#e67e22", // Different hover colors based on theme
  };

  const buttonStyle = {
    padding: "8px 18px", // Smaller button
    backgroundColor: "transparent",
    color: theme === "dark" ? "#fff" : "#000",
    border: `2px solid ${theme === "dark" ? "#f39c12" : "#e67e22"}`, // Button border changes with theme
    borderRadius: "30px",
    fontSize: "16px", // Slightly larger button text
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.4s ease",
    position: "relative",
    overflow: "hidden", // Hidden overflow for the glowing effect
    '@media (max-width: 768px)': {
      fontSize: '14px', // Adjust button text size for mobile
      padding: '6px 14px',
    },
  };

  const buttonHoverEffect = {
    backgroundColor: theme === "dark" ? "#f39c12" : "#e67e22", // Button hover background changes
    color: "#fff",
    boxShadow: `0px 0px 20px rgba(${theme === "dark" ? "243, 156, 18" : "230, 126, 34"}, 0.7)`, // Glowing effect on hover
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo Section */}
      <div
        style={logoStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = logoHoverStyle.transform;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "none";
        }}
      >
        <img
          src="PT.png" // Update this with the path to your actual logo
          alt="Palanati Technologies Logo"
          style={logoImgStyle}
        />
        <Link
          to="/"
          style={logoTextStyle}
          onMouseOver={(e) => (e.target.style.color = logoHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = theme === "dark" ? "#fff" : "#000")}
        >
          PALANATI
          <br />
          TECHNOLOGIES
        </Link>
      </div>

      {/* Navigation Links */}
      <ul style={navLinksStyle}>
        <li>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = theme === "dark" ? "#fff" : "#000")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = theme === "dark" ? "#fff" : "#000")}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = theme === "dark" ? "#fff" : "#000")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = theme === "dark" ? "#fff" : "#000")}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/login-signup"
            style={buttonStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = buttonHoverEffect.backgroundColor;
              e.target.style.color = buttonHoverEffect.color;
              e.target.style.boxShadow = buttonHoverEffect.boxShadow;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = theme === "dark" ? "#fff" : "#000";
              e.target.style.boxShadow = "none";
            }}
          >
            Let's Connect !!
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
