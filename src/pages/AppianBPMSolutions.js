import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const AppianBPMSolutions = () => {
  const navigate = useNavigate();
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null); // Track hovered card

  const handleContactClick = () => {
    navigate('/'); // Redirect to home page when button clicked
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Hi, Welcome to Our Appian BPM Solutions Portfolio</h1>
        <p style={styles.heroSubtitle}>
          Simplifying business processes through innovative BPM solutions.
        </p>
        <div style={styles.heroImageWrapper}>
          <img
            src="ap.webp"
            alt="Appian BPM Solutions Showcase"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Skills Section */}
      <section style={styles.skillsSection}>
        <h2 style={styles.sectionTitle}>Core Skills in Appian BPM</h2>
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
        <h2 style={styles.contactTitle}>Let’s Build Your BPM Solution</h2>
        <p style={styles.contactText}>
          Streamline your business processes with Appian BPM. Let’s work together!
        </p>
        <button style={styles.contactButton} onClick={handleContactClick}>Home</button>
      </section>
    </div>
  );
};

/* Skills Data */
const skills = [
  {
    title: 'Process Modeling',
    description: 'Designing complex workflows using Appian’s process modeling tools to optimize business efficiency.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&h=400&q=80' // Process Modeling - Elegant workflow process image
  },
  {
    title: 'Automation',
    description: 'Automating repetitive tasks with Appian’s low-code environment, enhancing productivity.',
    image: 'a.jpg' // Automation - Automation concept with code and gears
  },
  {
    title: 'Integration with Legacy Systems',
    description: 'Seamlessly integrating Appian with existing enterprise systems like SAP, Oracle, and more.',
    image: 'i.jpeg' // Legacy Systems Integration - Systems integration concept
  },
  {
    title: 'Data Management',
    description: 'Handling structured and unstructured data, ensuring secure and scalable data solutions within Appian.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?fit=crop&w=600&h=400&q=80' // Data Management - Database and cloud systems
  },
];

/* Styles */
const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#0e0e0e',
    color: '#fff',
    padding: '0',
    margin: '0',
    overflowX: 'hidden', // Prevent horizontal scrolling on small screens
  },
  heroSection: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #0f0f0f 30%, #001f3f 100%)',
    padding: '20px',
    '@media (max-width: 768px)': {
      padding: '20px 10px', // Adjust padding for mobile
    },
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: 'bold',
    color: '#1e90ff',
    letterSpacing: '2px',
    animation: 'fadeIn 2s ease-in-out',
    '@media (max-width: 768px)': {
      fontSize: '36px', // Adjust font size for mobile
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
      fontSize: '18px', // Adjust font size for mobile
      padding: '0 10px', // Add padding for mobile
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
      width: '100%', // Ensure image is responsive on mobile
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
      fontSize: '28px', // Adjust font size for mobile
    },
  },
  skillsSection: {
    padding: '60px 20px',
    '@media (max-width: 768px)': {
      padding: '40px 10px', // Adjust padding for mobile
    },
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  skillCard: {
    background: '#1a1a1a',
    padding: '40px',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      padding: '30px 20px', // Adjust padding for mobile
    },
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
    '@media (max-width: 768px)': {
      height: '150px', // Adjust image height for mobile
    },
  },
  skillTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#00bfff',
    '@media (max-width: 768px)': {
      fontSize: '20px', // Adjust font size for mobile
    },
  },
  skillDescription: {
    fontSize: '16px',
    color: '#aaa',
    marginTop: '10px',
    '@media (max-width: 768px)': {
      fontSize: '14px', // Adjust font size for mobile
    },
  },
  contactSection: {
    padding: '80px 20px',
    backgroundColor: '#0f0f0f',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      padding: '60px 10px', // Adjust padding for mobile
    },
  },
  contactTitle: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#1e90ff',
    '@media (max-width: 768px)': {
      fontSize: '24px', // Adjust font size for mobile
    },
  },
  contactText: {
    fontSize: '18px',
    color: '#aaa',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      fontSize: '16px', // Adjust font size for mobile
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
    '@media (max-width: 768px)': {
      padding: '10px 20px', // Adjust padding for mobile
    },
  },
  contactButtonHover: {
    backgroundColor: '#1e90ff',
    boxShadow: '0 5px 15px rgba(0, 191, 255, 0.5)',
  },
};

export default AppianBPMSolutions;
