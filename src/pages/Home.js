// // src/pages/Home.js
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Home = () => {
//   return (
//     <div>
//       {/* Slideshow Section */}
//       <section style={styles.carouselSection}>
//         <Carousel
//           autoPlay
//           interval={3000}  // Set to 3 seconds
//           infiniteLoop
//           showThumbs={false}
//           showStatus={false}
//           dynamicHeight={false}
//           emulateTouch
//           useKeyboardArrows
//           showArrows
//           stopOnHover={false}  // Ensure slideshow continues even when hovering
//         >
//           <div>
//             <img src="my1.jpg" alt="Freelancer Working" style={styles.carouselImage}/>
//             <p className="legend">Connect with Top Freelancers</p>
//           </div>
//           <div>
//             <img src="my main.jpg" alt="Project Collaboration" style={styles.carouselImage}/>
//             <p className="legend">Collaborate on Exciting Projects</p>
//           </div>
//           <div>
//             <img src="my2.jpeg" alt="Team Success" style={styles.carouselImage}/>
//             <p className="legend">Achieve Success Together</p>
//           </div>
//         </Carousel>
//       </section>

//       {/* Why Choose Us Section */}
//       <section style={styles.whyChooseSection}>
//         <h2 style={styles.sectionTitle}>Why Choose Our Platform?</h2>
//         <p style={styles.sectionDescription}>
//           We bridge the gap between talented freelancers and businesses worldwide. Our platform ensures quality, reliability, and seamless collaboration to bring your projects to life.
//         </p>

//         {/* Features Grid */}
//         <div style={styles.featuresGrid}>
//           <div style={styles.featureCard}>
//             <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" alt="Tech Talent" style={styles.featureImage} />
//             <h3>Top Tech Talent</h3>
//             <p>Access a diverse pool of skilled developers to build innovative solutions.</p>
//           </div>
//           <div style={styles.featureCard}>
//             <img src="my2.jpeg" alt="Creative Designers" style={styles.featureImage} />
//             <h3>Creative Designers</h3>
//             <p>Partner with talented designers to create stunning visuals for your brand.</p>
//           </div>
//           <div style={styles.featureCard}>
//             <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80" alt="Reliable Professionals" style={styles.featureImage} />
//             <h3>Reliable Professionals</h3>
//             <p>Work with vetted experts who deliver quality work on time.</p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section style={styles.callToActionSection}>
//         <h2>Ready to Elevate Your Projects?</h2>
//         <p style={styles.ctaDescription}>
//           Join our platform today to find the perfect freelancers or start offering your skills to a global audience. Let's build something amazing together!
//         </p>
//         <button style={styles.ctaButton} onClick={() => window.location.href="/login-signup"}>
//           Get Started
//         </button>
//       </section>
//     </div>
//   );
// };

// // Inline Styles
// const styles = {
//   carouselSection: {
//     width: '100%',
//     height: '100vh',  // Make the carousel take full height
//     overflow: 'hidden',
//     marginTop: '-5px', // Aligns with the navbar
//   },
//   carouselImage: {
//     width: '100%',
//     height: '100vh',  // Ensure images fill the entire viewport height
//     objectFit: 'cover',  // Maintain aspect ratio while covering the entire area
//   },
//   whyChooseSection: {
//     padding: '60px 20px',
//     backgroundColor: '#f9f9f9',
//     textAlign: 'center',
//   },
//   sectionTitle: {
//     fontSize: '2.5rem',
//     marginBottom: '20px',
//     color: '#333',
//   },
//   sectionDescription: {
//     fontSize: '1.2rem',
//     maxWidth: '800px',
//     margin: '0 auto 40px',
//     color: '#555',
//   },
//   featuresGrid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     gap: '40px',
//   },
//   featureCard: {
//     flex: '1 1 300px',
//     maxWidth: '300px',
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//     textAlign: 'center',
//   },
//   featureImage: {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     borderRadius: '10px',
//     marginBottom: '15px',
//   },
//   callToActionSection: {
//     padding: '60px 20px',
//     backgroundColor: '#333',
//     color: '#fff',
//     textAlign: 'center',
//   },
//   ctaDescription: {
//     fontSize: '1.2rem',
//     maxWidth: '700px',
//     margin: '0 auto 30px',
//   },
//   ctaButton: {
//     padding: '15px 30px',
//     backgroundColor: '#ff5722',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '1.1rem',
//     transition: 'background-color 0.3s ease',
//   },
// };

// export default Home;





// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section with Video Background */}
//       <section style={styles.heroSection}>
//         <video autoPlay muted loop style={styles.videoBackground}>
//           <source src="1.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div style={styles.heroOverlay}></div>
//         <div style={styles.heroContent}>
//           <h1 style={styles.heroTitle}>Empower Your Business with Top Talent</h1>
//           <p style={styles.heroSubtitle}>We connect businesses with skilled freelancers to deliver world-class results.</p>
//         </div>
//       </section>

//       {/* Slideshow Section */}
//       <section style={styles.carouselSection}>
//         <Carousel
//           autoPlay
//           interval={3000}  
//           infiniteLoop
//           showThumbs={false}
//           showStatus={false}
//           emulateTouch
//           useKeyboardArrows
//           showArrows
//           stopOnHover={false}
//         >
//           <div>
//             <img src="my1.jpg" alt="Freelancer Working" style={styles.carouselImage}/>
//             <p className="legend">Connect with Top Freelancers</p>
//           </div>
//           <div>
//             <img src="my main.jpg" alt="Project Collaboration" style={styles.carouselImage}/>
//             <p className="legend">Collaborate on Exciting Projects</p>
//           </div>
//           <div>
//             <img src="my2.jpeg" alt="Team Success" style={styles.carouselImage}/>
//             <p className="legend">Achieve Success Together</p>
//           </div>
//         </Carousel>
//       </section>

//       {/* Why Choose Us Section with Glassmorphism */}
//       <section style={styles.whyChooseSection}>
//         <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
//         <p style={styles.sectionDescription}>
//           We bridge the gap between talented freelancers and businesses worldwide, offering top-quality services and innovative solutions.
//         </p>

//         <div style={styles.featuresGrid}>
//           <div style={styles.glassCard}>
//             <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" alt="Tech Talent" style={styles.featureImage} />
//             <h3>Top Tech Talent</h3>
//             <p>Access skilled developers who create cutting-edge solutions for your business.</p>
//           </div>
//           <div style={styles.glassCard}>
//             <img src="my2.jpeg" alt="Creative Designers" style={styles.featureImage} />
//             <h3>Creative Designers</h3>
//             <p>Partner with top designers to create stunning visuals for your brand.</p>
//           </div>
//           <div style={styles.glassCard}>
//             <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80" alt="Reliable Professionals" style={styles.featureImage} />
//             <h3>Reliable Professionals</h3>
//             <p>Work with trusted experts who deliver quality results on time.</p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section style={styles.callToActionSection}>
//         <h2 style={styles.callToActionTitle}>Ready to Elevate Your Projects?</h2>
//         <p style={styles.ctaDescription}>
//           Join our platform today to find the perfect freelancers or offer your skills to a global audience.
//         </p>
//         <button style={styles.ctaButton} onClick={() => window.location.href="/login-signup"}>
//           Get Started
//         </button>
//       </section>
//     </div>
//   );
// };

// // Styles with Glassmorphism, Video Background, and Advanced Animations
// const styles = {
//   heroSection: {
//     position: 'relative',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     color: '#fff',
//     overflow: 'hidden',
//   },
//   videoBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100vh',
//     objectFit: 'cover',
//     zIndex: -1,
//   },
//   heroOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100vh',
//     background: 'rgba(0, 0, 0, 0.5)', // Dark overlay to ensure text visibility
//     zIndex: 1,
//   },
//   heroContent: {
//     zIndex: 2,
//     maxWidth: '800px',
//     padding: '0 20px',
//   },
//   heroTitle: {
//     fontSize: '4rem',
//     marginBottom: '20px',
//     animation: 'fadeInDown 1.5s ease-in-out',
//   },
//   heroSubtitle: {
//     fontSize: '1.5rem',
//     animation: 'fadeInUp 1.5s ease-in-out',
//   },
//   carouselSection: {
//     width: '100%',
//     height: '100vh',
//     overflow: 'hidden',
//   },
//   carouselImage: {
//     width: '100%',
//     height: '100vh',
//     objectFit: 'cover',
//   },
//   whyChooseSection: {
//     padding: '80px 20px',
//     backgroundColor: '#f4f4f4',
//     textAlign: 'center',
//   },
//   sectionTitle: {
//     fontSize: '2.5rem',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   sectionDescription: {
//     fontSize: '1.2rem',
//     maxWidth: '800px',
//     margin: '0 auto 40px',
//     color: '#555',
//   },
//   featuresGrid: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '40px',
//     flexWrap: 'wrap',
//   },
//   glassCard: {
//     flex: '1 1 300px',
//     maxWidth: '300px',
//     padding: '20px',
//     background: 'rgba(255, 255, 255, 0.1)',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '15px',
//     color: '#333',
//     transition: 'transform 0.3s ease-in-out',
//     '&:hover': {
//       transform: 'scale(1.05)',
//     },
//   },
//   featureImage: {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     borderRadius: '10px',
//     marginBottom: '15px',
//   },
//   callToActionSection: {
//     padding: '100px 20px',
//     backgroundColor: '#333',
//     color: '#fff',
//     textAlign: 'center',
//   },
//   callToActionTitle: {
//     fontSize: '2.5rem',
//     marginBottom: '30px',
//   },
//   ctaDescription: {
//     fontSize: '1.3rem',
//     maxWidth: '800px',
//     margin: '0 auto 40px',
//   },
//   ctaButton: {
//     padding: '15px 40px',
//     backgroundColor: '#ff5722',
//     color: '#fff',
//     borderRadius: '30px',
//     fontSize: '1.2rem',
//     cursor: 'pointer',
//     transition: 'transform 0.3s ease-in-out',
//     '&:hover': {
//       transform: 'scale(1.1)',
//     },
//   },
// };

// export default Home;

import React from 'react';
import Chatbot from './Chatbot';  // Import the Chatbot component

const Home = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Hero Section with Video Background */}
      <section style={styles.heroSection}>
        <video autoPlay muted loop style={styles.videoBackground}>
          <source src="1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Empower Your Business with Top Talent</h1>
          <p style={styles.heroSubtitle}>
            We connect businesses with skilled freelancers to deliver world-class results.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={styles.whyChooseSection}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <p style={styles.sectionDescription}>
          We bridge the gap between talented freelancers and businesses worldwide, offering top-quality services and innovative solutions.
        </p>

        <div style={styles.featuresGrid}>
          <div style={styles.glassCard}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80"
              alt="Tech Talent"
              style={styles.featureImage}
            />
            <h3>Top Tech Talent</h3>
            <p>Access skilled developers who create cutting-edge solutions for your business.</p>
          </div>
          <div style={styles.glassCard}>
            <img src="my2.jpeg" alt="Creative Designers" style={styles.featureImage} />
            <h3>Creative Designers</h3>
            <p>Partner with top designers to create stunning visuals for your brand.</p>
          </div>
          <div style={styles.glassCard}>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80"
              alt="Reliable Professionals"
              style={styles.featureImage}
            />
            <h3>Reliable Professionals</h3>
            <p>Work with trusted experts who deliver quality results on time.</p>
          </div>

          {/* New Pre & Post Support Card */}
          <div style={styles.glassCard}>
            <img
              src="app.jpg"
              alt="Application Support"
              style={styles.featureImage}
            />
            <h3>Application Support</h3>
            <p>
              We provide end-to-end application support, ensuring seamless transitions from pre-launch setup to post-launch maintenance, so your business can stay ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={styles.callToActionSection}>
        <h2 style={styles.callToActionTitle}>Ready to Elevate Your Projects?</h2>
        <p style={styles.ctaDescription}>
          Join our platform today to find the perfect freelancers or offer your skills to a global audience.
        </p>
        <button style={styles.ctaButton} onClick={() => window.location.href = "/login-signup"}>
          Get Started
        </button>
      </section>

      {/* Add the Chatbot component at the bottom */}
      <Chatbot />
    </div>
  );
};

// Styles with adjustments for margins, video background, and responsiveness
const styles = {
  pageContainer: {
    width: '100%',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  },
  heroSection: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    overflow: 'hidden',
  },
  videoBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  heroContent: {
    zIndex: 2,
    maxWidth: '800px',
    padding: '0 20px',
    '@media (max-width: 768px)': {
      padding: '0 10px',
    },
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '20px',
    animation: 'fadeInDown 1.5s ease-in-out',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    animation: 'fadeInUp 1.5s ease-in-out',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
  whyChooseSection: {
    padding: '80px 20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    width: '100%',
    '@media (max-width: 768px)': {
      padding: '60px 15px',
    },
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  sectionDescription: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto 40px',
    color: '#555',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
  featuresGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      gap: '20px',
    },
  },
  glassCard: {
    flex: '1 1 300px',
    maxWidth: '300px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    color: '#333',
    transition: 'transform 0.3s ease-in-out',
    '@media (max-width: 768px)': {
      padding: '15px',
    },
  },
  featureImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
    '@media (max-width: 768px)': {
      height: '150px',
    },
  },
  callToActionSection: {
    padding: '100px 20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    '@media (max-width: 768px)': {
      padding: '80px 15px',
    },
  },
  callToActionTitle: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  ctaDescription: {
    fontSize: '1.3rem',
    maxWidth: '800px',
    margin: '0 auto 40px',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
  ctaButton: {
    padding: '15px 40px',
    backgroundColor: '#ff5722',
    color: '#fff',
    borderRadius: '30px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    '@media (max-width: 768px)': {
      padding: '10px 30px',
      fontSize: '1rem',
    },
  },
};

export default Home;

