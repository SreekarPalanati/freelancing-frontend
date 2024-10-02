import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const GraphicDesign = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null); // Track hovered card

  const handleContactClick = () => {
    navigate('/'); // Redirect to the home page when button is clicked
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Hi, Welcome to Our Graphic Design Portfolio</h1>
        <p style={styles.heroSubtitle}>
          Bringing bold, creative ideas to life through visual storytelling.
        </p>
        <div style={styles.heroImageWrapper}>
          <img
            src="00.webp"
            alt="Graphic Design Showcase"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Skills Section */}
      <section style={styles.skillsSection}>
        <h2 style={styles.sectionTitle}>Our Graphic Design Expertise</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={hoveredCardIndex === index ? { ...styles.skillCard, ...styles.skillCardHover } : styles.skillCard}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <div style={styles.skillImageWrapper}>
                <img src={skill.image} alt={skill.title} style={styles.skillImage} />
              </div>
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
        <h2 style={styles.contactTitle}>Let's Create Something Incredible</h2>
        <p style={styles.contactText}>
          Ready to elevate your brand with stunning designs? Let’s collaborate on your next big project!
        </p>
        <button style={styles.contactButton} onClick={handleContactClick}>Home</button>
      </section>
    </div>
  );
};

/* Skills Data */
const skills = [
  {
    title: 'Brand Identity Design',
    description: 'Developing iconic brand identities that stand out and resonate with your audience.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fit=crop&w=600&h=400&q=80', // Example brand identity image
  },
  {
    title: 'Logo Design',
    description: 'Crafting unique logos that convey your brand’s core values and vision.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=600&h=400&q=80', // Example logo design image
  },
  {
    title: 'UI/UX Design',
    description: 'Designing engaging user interfaces and intuitive experiences.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=600&h=400&q=80', // Example UI/UX design image
  },
  {
    title: 'Illustration & Artwork',
    description: 'Creating custom illustrations that reflect your brand’s message.',
    image: '222.jpeg', // Example illustration image
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
    padding: '0 20px',
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
    gap: '40px',
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
  skillImageWrapper: {
    marginBottom: '20px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(30, 144, 255, 0.3)',
  },
  skillImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
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

export default GraphicDesign;
