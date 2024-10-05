import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!email.endsWith('@gmail.com')) {
    //   setError('Please enter a valid Gmail address.');
    //   return;
    // }

    setError('');
    setLoading(true); // Start loading spinner
    try {
      // const response = await axios.post('http://localhost:5000/send-email', { email });
      const formData = new FormData(e.target);

      formData.append("access_key", "2f3f6e62-4e58-4628-81e4-5263aaf75553");
      // const response = null
  console.log(formData);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
   console.log(data.success);
    if (data.success) {
      // setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      // setResult(data.message);
    }
      setSuccess('Thank you for connecting with us!');
      setLoading(false); // Stop loading spinner
      // setEmail(''); // Reset form after success
      alert(response.data.message);
      setTimeout(() => {
        navigate('/thankyou'); // Navigate to the thank you page after a delay
      }, 1000); // 1 second delay to show the success message
    } catch (error) {
      setLoading(false); // Stop loading spinner
      // setError('Failed to send email. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Let's Connect</h2>
        {error && <p style={styles.errorText}>{error}</p>}
        {success && <p style={styles.successText}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Gmail Address:</label>
            <input
                    className="input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    type="email"
                  />
          </div>
          <button type="submit" style={styles.submitButton} disabled={loading}>
            {loading ? 'Connecting...' : 'Connect'}
          </button>
        </form>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    padding: '40px',
    color: '#333',
    '@media (max-width: 768px)': {
      padding: '20px',
    },
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '400px',
    textAlign: 'center',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    position: 'relative',
    zIndex: '1',
    '@media (max-width: 768px)': {
      width: '100%',
      padding: '30px',
    },
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#f7636c',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      fontSize: '28px',
    },
  },
  errorText: {
    color: '#ff4d4d',
    fontSize: '14px',
    marginBottom: '20px',
  },
  successText: {
    color: '#28a745',
    fontSize: '14px',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    boxSizing: 'border-box',
    backgroundColor: '#fafafa',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#FF5733',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '@media (max-width: 768px)': {
      padding: '10px',
      fontSize: '14px',
    },
  },
};

export default LetsConnect;
