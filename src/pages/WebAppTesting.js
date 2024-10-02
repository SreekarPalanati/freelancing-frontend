import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const WebAppTesting = () => {
  const navigate = useNavigate();
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null); // Track hovered card

  const handleContactClick = () => {
    navigate('/'); // Redirect to home page when button clicked
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Hi, Welcome to Our Web Application Testing Portfolio</h1>
        <p style={styles.heroSubtitle}>
          Ensuring flawless performance, security, and scalability for your web applications.
        </p>
        <div style={styles.heroImageWrapper}>
          <img
            src="ww.jpg"
            alt="Web Application Testing Showcase"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Skills Section */}
      <section style={styles.skillsSection}>
        <h2 style={styles.sectionTitle}>Core Skills in Web Application Testing</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={hoveredCardIndex === index ? { ...styles.skillCard, ...styles.skillCardHover } : styles.skillCard}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <img src={skill.image} alt={skill.title} style={styles.skillImage} />
              <h3 style={styles.skillTitle}>{skill.title}</h3>
              <p style={styles.skillDescription}>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Let’s Ensure Your Application is Bug-Free</h2>
        <p style={styles.contactText}>
          Ready to make sure your web app is secure, scalable, and bug-free? Let’s discuss your next testing project!
        </p>
        <button
          style={styles.contactButton}
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          onClick={handleContactClick}
        >
          Home
        </button>
      </section>
    </div>
  );
};

/* Skills Data */
const skills = [
  {
    title: 'Functional Testing',
    description: 'Ensuring that all functionalities of your web application work as expected with no bugs.',
    image: 'f.jpg', // Functional Testing image
  },
  {
    title: 'Performance Testing',
    description: 'Testing the application’s performance under various conditions and load.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=600&h=400&q=80', // Performance Testing image
  },
  {
    title: 'Security Testing',
    description: 'Ensuring your web application is protected against security threats, such as XSS and SQL injection.',
    image: 's.jpeg', // Security Testing image
  },
  {
    title: 'Automation Testing',
    description: 'Using automation tools to run regression tests and save time on manual testing.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&h=400&q=80', // Automation Testing image
  },
];

/* Mouse hover effects */
const handleMouseEnter = (e) => {
  e.target.style.backgroundColor = '#1e90ff'; // Light blue hover effect
  e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
};

const handleMouseLeave = (e) => {
  e.target.style.backgroundColor = '#00bfff'; // Revert to original blue color
  e.target.style.boxShadow = 'none';
};

/* Styles */
const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#0e0e0e',
    color: '#fff',
    padding: '0',
    margin: '0',
    '@media (max-width: 768px)': {
      padding: '15px',
    },
  },
  heroSection: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #0f0f0f 30%, #001f3f 100%)',
    '@media (max-width: 768px)': {
      height: '80vh',
    },
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: 'bold',
    color: '#1e90ff',
    letterSpacing: '2px',
    animation: 'fadeIn 2s ease-in-out',
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },
  heroSubtitle: {
    fontSize: '24px',
    color: '#87CEFA',
    marginTop: '20px',
    maxWidth: '700px',
    lineHeight: '1.5',
    animation: 'fadeIn 3s ease-in-out',
    '@media (max-width: 768px)': {
      fontSize: '18px',
    },
  },
  heroImageWrapper: {
    marginTop: '40px',
    overflow: 'hidden',
    borderRadius: '15px',
    boxShadow: '0 8px 30px rgba(0, 191, 255, 0.5)',
    width: '100%',
    maxWidth: '800px',
    transition: 'transform 0.4s ease',
    '@media (max-width: 768px)': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  divider: {
    height: '4px',
    background: 'linear-gradient(90deg, #1e90ff 0%, #000000 100%)',
    margin: '40px 0',
  },
  sectionTitle: {
    fontSize: '36px',
    color: '#1e90ff',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '40px 0',
    '@media (max-width: 768px)': {
      fontSize: '28px',
    },
  },
  skillsSection: {
    padding: '60px 20px',
    '@media (max-width: 768px)': {
      padding: '40px 10px',
    },
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  skillCard: {
    background: '#1a1a1a',
    padding: '40px',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
    cursor: 'pointer',
  },
  skillCardHover: {
    transform: 'scale(1.05) rotateY(10deg)',
    background: 'linear-gradient(135deg, #001f3f, #003f7f)',
    boxShadow: '0 10px 25px rgba(0, 64, 128, 0.7)',
    color: '#fff',
  },
  skillImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  skillTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#00bfff',
    '@media (max-width: 768px)': {
      fontSize: '20px',
    },
  },
  skillDescription: {
    fontSize: '16px',
    color: '#aaa',
    marginTop: '10px',
    '@media (max-width: 768px)': {
      fontSize: '14px',
    },
  },
  contactSection: {
    padding: '80px 20px',
    backgroundColor: '#0f0f0f',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      padding: '60px 15px',
    },
  },
  contactTitle: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#1e90ff',
    '@media (max-width: 768px)': {
      fontSize: '24px',
    },
  },
  contactText: {
    fontSize: '18px',
    color: '#aaa',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      fontSize: '16px',
    },
  },
  contactButton: {
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#00bfff',
    color: '#fff',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    border: 'none',
  },
};

export default WebAppTesting;
