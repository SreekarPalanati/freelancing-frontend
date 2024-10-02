import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const [theme, setTheme] = useState('light'); // Default theme is light
  const navigate = useNavigate();

  // Automatically detect system's light/dark mode
  useEffect(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(userPrefersDark ? 'dark' : 'light');
  }, []);

  const handleGoHome = () => {
    navigate('/'); // Navigate back to the Home page
  };

  const currentStyles = theme === 'light' ? lightThemeStyles : darkThemeStyles;

  return (
    <div style={currentStyles.container}>
      <div style={currentStyles.card}>
        <h1 style={currentStyles.title}>Thanks For Connecting With Us!</h1>
        <p style={currentStyles.message}>Our team will reach out to you soon.</p>
        <button
          style={currentStyles.button}
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e, theme)}
          onClick={handleGoHome}
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

const handleMouseEnter = (e) => {
  e.target.style.backgroundColor = '#FF5733'; // Orange on hover
  e.target.style.color = '#fff';
  e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
};

const handleMouseLeave = (e, theme) => {
  e.target.style.backgroundColor = theme === 'light' ? '#333' : '#f0f0f0'; // Revert to original color based on theme
  e.target.style.color = theme === 'light' ? '#fff' : '#333';
  e.target.style.boxShadow = 'none';
};

// Light theme styles
const lightThemeStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #f0f0f0, #d0d0d0)',
    padding: '20px',
    '@media (max-width: 768px)': {
      padding: '15px',
    },
  },
  card: {
    backgroundColor: '#fff',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      padding: '40px',
    },
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#555',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
  button: {
    padding: '12px 30px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
      padding: '10px 20px',
    },
  },
};

// Dark theme styles
const darkThemeStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #2e2e2e, #1e1e1e)',
    padding: '20px',
    '@media (max-width: 768px)': {
      padding: '15px',
    },
  },
  card: {
    backgroundColor: '#333',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      padding: '40px',
    },
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#fff',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#ccc',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
  button: {
    padding: '12px 30px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
      padding: '10px 20px',
    },
  },
};

export default ThankYou;
