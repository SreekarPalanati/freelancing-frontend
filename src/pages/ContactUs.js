import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css'; // Ensure this matches your project structure

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "2f3f6e62-4e58-4628-81e4-5263aaf75553");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  console.log(response);

    const data = await response.json();

    if (data.success) {
      console.log("Sent Email")
      // setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      // setResult(data.message);
    }

    // // Sending the form data to the backend API
    // axios.post('http://localhost:5000/send-email', formData)
    //   .then((response) => {
    //     alert('Your message has been sent successfully!');
    //     // Clear the form after successful submission
    //     setFormData({
    //       firstName: '',
    //       lastName: '',
    //       email: '',
    //       query: '',
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('There was an error sending the message!', error);
    //     alert('Failed to send the message. Please try again.');
    //   });
  };

  return (
    <div className="contact_us_page">
      <div className="contact-container">
        {/* Contact Us Form - Left Side */}
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div className="form-wrapper">
              <div className="head-text-box">
                <p className="contactus-head">Contact Us</p>
                <p className="contactus-subhead">
                  If you have any questions, concerns, or feedback, please don’t hesitate to reach out to us. 
                  Our team is here to provide you with the support you need. 
                </p>
              </div>
              <div className="responsive-container-block">
                <div className="responsive-cell-block">
                  <p className="input-title">FIRST NAME</p>
                  <input
                    className="input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="responsive-cell-block">
                  <p className="input-title">LAST NAME</p>
                  <input
                    className="input"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="responsive-cell-block">
                  <p className="input-title">EMAIL</p>
                  <input
                    className="input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="responsive-cell-block">
                  <p className="input-title">WHAT DO YOU HAVE IN MIND</p>
                  <textarea
                    className="textinput"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="Please enter your query..."
                  />
                </div>
              </div>
              <div className="btn-wrapper">
                <button className="submit-btn" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>

        {/* Get In Touch Information - Right Side */}
        <div className="container-box">
          <div className="text-content">
            <p className="contactus-head">Get in Touch</p>
            <p className="contactus-subhead">
              Feel free to connect with us for any inquiries or support. 
              We are available via email, phone, or visit us at our office. 
              Our team is dedicated to helping you solve your problems.
            </p>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" alt="Phone" />
              <p className="contact-text">+91 9347266346</p>
            </div>
            <div className="contact-item">
              <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" alt="Email" />
              <p className="contact-text">palanatigroup@gmail.com</p>
            </div>
            <div className="contact-item">
              <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" alt="Address" />
              <p className="contact-text">Hyderabad, India</p>
            </div>
          </div>
          <div className="social-media-links">
            <a href="#">
              <img className="social-svg" id="google" src="4.png" alt="Google" />
            </a>
            <a href="#">
              <img className="social-svg" id="twitter" src="2.jpeg" alt="Twitter" />
            </a>
            <a href="#">
              <img className="social-svg" id="instagram" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
            </a>
            <a href="#">
              <img className="social-svg" id="facebook" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
