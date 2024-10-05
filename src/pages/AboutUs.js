



// // src/pages/AboutUs.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

// const AboutUs = () => {
//   const navigate = useNavigate();  // Initialize the navigate function

//   // State to manage theme: 'light' or 'dark'
//   const [theme, setTheme] = useState('light');  // Default theme is 'light'

//   // Function to toggle theme
//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   // Define styles based on the theme
//   const themeStyles = {
//     backgroundColor: theme === 'light' ? '#fff' : '#1e1e1e',
//     color: theme === 'light' ? '#000' : '#fff',
//     transition: 'all 0.3s ease',
//     padding: '20px',
//     fontSize: '18px',
//     lineHeight: '1.6',
//   };

//   const sectionStyles = {
//     backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
//     color: theme === 'light' ? '#000' : '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//   };

//   const handleExploreClick = () => {
//     navigate('/services');  // Navigate to the Services page when the button is clicked
//   };

//   return (
//     <div style={themeStyles}>
//       <button
//         onClick={toggleTheme}
//         style={{
//           backgroundColor: theme === 'light' ? '#333' : '#f9f9f9',
//           color: theme === 'light' ? '#fff' : '#000',
//           padding: '10px 20px',
//           borderRadius: '5px',
//           border: 'none',
//           cursor: 'pointer',
//           marginBottom: '20px',
//         }}
//       >
//         Toggle Theme
//       </button>

//       <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>About Us</h2>
//       <p style={{ fontSize: '20px' }}>
//         Welcome to <strong>P Technologies</strong>, a vibrant platform that connects talented freelancers with businesses looking for specialized expertise to bring their projects to life.
//         Whether you need a single professional or an entire team, <strong>we have you covered!</strong>
//       </p>

//       {/* Section 1: Collaboration */}
//       <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
//         <div style={{ flex: 1, paddingRight: '20px' }}>
//           <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Our Vision</h3>
//           <p style={{ fontSize: '20px' }}>
//             At <strong>P Technologies</strong>, we believe in the power of collaboration. Our platform connects freelancers with businesses, ensuring high-quality, efficient, and creative outcomes for every project.
//           </p>
//         </div>
//         <img
//           src="col.jpeg"
//           alt="Collaboration"
//           style={{ borderRadius: '10px', width: '400px', height: '300px', objectFit: 'cover' }}
//         />
//       </section>

//       {/* Section 2: Expertise */}
//       <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', ...sectionStyles }}>
//         <img
//           src="web development.jpg"
//           alt="Web Development"
//           style={{ borderRadius: '10px', width: '400px', height: '300px', objectFit: 'cover' }}
//         />
//         <div style={{ flex: 1, paddingLeft: '20px' }}>
//           <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Our Expertise</h3>
//           <p style={{ fontSize: '20px' }}>
//             Whether you're looking for a web developer, creative designer, or an experienced project manager, <strong>P Technologies</strong> offers a curated selection of professionals across multiple industries.
//           </p>
//         </div>
//       </section>

//       {/* Section 3: Growth and Success */}
//       <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
//         <div style={{ flex: 1, paddingRight: '20px' }}>
//           <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Helping Startups Grow</h3>
//           <p style={{ fontSize: '20px' }}>
//             Our platform provides startup businesses with best-in-class solutions. From freelance services to expert project management, we're here to help your business succeed.
//           </p>
//         </div>
//         <img
//           src="statup.jpeg"
//           alt="Startup Success"
//           style={{ borderRadius: '10px', width: '400px', height: '300px', objectFit: 'cover' }}
//         />
//       </section>

//       {/* Section 4: Freelance Creativity */}
//       <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', ...sectionStyles }}>
//         <img
//           src="Freelancers.jpg"
//           alt="Freelancers Creativity"
//           style={{ borderRadius: '10px', width: '400px', height: '300px', objectFit: 'cover' }}
//         />
//         <div style={{ flex: 1, paddingLeft: '20px' }}>
//           <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Creativity and Innovation</h3>
//           <p style={{ fontSize: '20px' }}>
//             Freelancers on <strong>P Technologies</strong> offer unique and creative solutions that help businesses innovate. From graphic design to full-scale web applications, our professionals deliver exceptional results.
//           </p>
//         </div>
//       </section>

//       {/* Section 5: Call to Action */}
//       <section style={{ marginTop: '40px', textAlign: 'center' }}>
//         <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Ready to Get Started?</h3>
//         <p style={{ fontSize: '20px' }}>Join us today and take your projects to the next level with <strong>P Technologies</strong>.</p>
//         <button
//           style={{
//             padding: '15px 30px',
//             backgroundColor: '#333',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontSize: '18px',
//             transition: 'background-color 0.3s ease',
//           }}
//           onClick={handleExploreClick}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = '#333')}
//         >
//           Explore Services
//         </button>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;





// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AboutUs = () => {
//   const navigate = useNavigate();

//   const darkThemeStyles = {
//     backgroundColor: '#1e1e1e',
//     color: '#fff',
//     padding: '20px',
//     fontSize: '18px',
//     lineHeight: '1.6',
//     transition: 'all 0.3s ease',
//   };

//   const sectionStyles = {
//     backgroundColor: '#333',
//     color: '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//     marginTop: '40px',
//   };

//   const handleExploreClick = () => {
//     navigate('/services');
//   };

//   return (
//     <div style={darkThemeStyles}>
//       <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Welcome to P Technologies</h2>
//       <p style={{ fontSize: '20px', textAlign: 'center', marginBottom: '40px' }}>
//         At P Technologies, we believe in connecting businesses with world-class freelancers to bring ideas to life. With a diverse global network, we ensure the right talent matches your project needs.
//       </p>

//       {/* Section: Our Team */}
//       <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
//         <div style={{ flex: 1, paddingRight: '20px' }}>
//           <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>About Us</h3>
//           <p style={{ fontSize: '20px' }}>
//             P Technologies is a dynamic platform connecting businesses and freelancers across industries. Our global team of experts ensures every project receives high-quality, tailored solutions.
//           </p>
//         </div>
//         <img
//           src="/path/to/team-image.jpg"
//           alt="Team Photo"
//           style={{ borderRadius: '10px', width: '400px', height: '300px', objectFit: 'cover' }}
//         />
//       </section>

//       {/* Section: Meet the Founders */}
//       <section style={{ marginBottom: '40px' }}>
//         <h3 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Meet Our Founders</h3>
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <div style={{ flex: 1, paddingRight: '20px', textAlign: 'center' }}>
//             <img
//               src="/path/to/founder1.jpg"
//               alt="Founder 1"
//               style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
//             />
//             <h4>Founder Name 1</h4>
//             <p style={{ fontSize: '18px' }}>A brief bio about Founder 1.</p>
//           </div>
//           <div style={{ flex: 1, paddingLeft: '20px', textAlign: 'center' }}>
//             <img
//               src="/path/to/founder2.jpg"
//               alt="Founder 2"
//               style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
//             />
//             <h4>Founder Name 2</h4>
//             <p style={{ fontSize: '18px' }}>A brief bio about Founder 2.</p>
//           </div>
//         </div>
//       </section>

//       {/* Section: Board Members */}
//       <section style={{ marginBottom: '40px', textAlign: 'center' }}>
//         <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Our Board of Members</h3>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <div style={{ paddingRight: '20px' }}>
//             <img
//               src="/path/to/board-member1.jpg"
//               alt="Board Member 1"
//               style={{ borderRadius: '10px', width: '200px', height: '250px', objectFit: 'cover' }}
//             />
//             <h4>Board Member 1</h4>
//             <p>Role / Position</p>
//           </div>
//           <div style={{ paddingLeft: '20px' }}>
//             <img
//               src="/path/to/board-member2.jpg"
//               alt="Board Member 2"
//               style={{ borderRadius: '10px', width: '200px', height: '250px', objectFit: 'cover' }}
//             />
//             <h4>Board Member 2</h4>
//             <p>Role / Position</p>
//           </div>
//         </div>
//       </section>

//       {/* Section: Vision */}
//       <section style={sectionStyles}>
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <div style={{ flex: 1, paddingRight: '20px' }}>
//             <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Our Vision</h3>
//             <p style={{ fontSize: '20px' }}>
//               Our vision at P Technologies is to enable businesses and freelancers to collaborate effortlessly, regardless of location, fostering growth, innovation, and success.
//             </p>
//           </div>
//           <img
//             src="/path/to/vision-image.jpg"
//             alt="Vision"
//             style={{ borderRadius: '10px', width: '400px', height: '300px', objectFit: 'cover' }}
//           />
//         </div>
//       </section>

//       {/* Section: Commitment */}
//       <section style={sectionStyles}>
//         <img
//           src="/path/to/commitment-image.jpg"
//           alt="Commitment"
//           style={{ borderRadius: '10px', width: '400px', height: '300px', objectFit: 'cover' }}
//         />
//         <div style={{ flex: 1, paddingLeft: '20px' }}>
//           <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Our Commitment</h3>
//           <p style={{ fontSize: '20px' }}>
//             We are committed to helping our clients achieve their goals through high-quality solutions, connecting them with top talent in the industry for impactful results.
//           </p>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section style={{ marginTop: '40px', textAlign: 'center' }}>
//         <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Ready to Get Started?</h3>
//         <p style={{ fontSize: '20px' }}>Join P Technologies today to find the perfect freelancer for your project needs.</p>
//         <button
//           style={{
//             padding: '15px 30px',
//             backgroundColor: '#ff5722',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontSize: '18px',
//             transition: 'background-color 0.3s ease',
//           }}
//           onClick={handleExploreClick}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff5722')}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff5722')}
//         >
//           Explore Services
//         </button>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  // Main theme styles
  const themeStyles = {
    backgroundColor: '#f4f4f4',
    color: '#333',
    fontFamily: "'Roboto', sans-serif",
    lineHeight: '1.8',
    padding: '0',
    margin: '0',
    overflowX: 'hidden', // Prevent horizontal scrolling on small screens
  };

  const titleStyles = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '30px',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
  };

  const subtitleStyles = {
    fontSize: '22px',
    color: '#fff',
    marginBottom: '50px',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
  };

  const sectionStyles = {
    margin: '0',
    padding: '40px 0',
  };

  const sectionTitle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#f7636c',
    marginBottom: '30px',
  };

  const textBlock = {
    fontSize: '20px',
    color: '#333',
    marginBottom: '25px',
  };

  const buttonStyle = {
    padding: '12px 30px',
    backgroundColor: '#f7636c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    marginTop: '30px',
  };

  const imageStyles = {
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '300px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    margin: '20px',
    overflow: 'hidden',
    position: 'relative',
  };

  const cardContainer = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const cardTitle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#f7636c',
  };

  const cardSubtitle = {
    fontSize: '18px',
    color: '#666',
    marginTop: '5px',
    marginBottom: '15px',
  };

  const welcomeSectionStyles = {
    ...sectionStyles,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('333.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    padding: '100px 0',
    margin: '0',
  };

  const handleExploreClick = () => {
    navigate('/services');
  };

  return (
    <div style={themeStyles}>
      {/* Welcome Section with More Transparent Background Image */}
      <section style={welcomeSectionStyles}>
        <h2 style={titleStyles}>Welcome to P Technologies</h2>
        <p style={subtitleStyles}>
          At P Technologies, we specialize in connecting talented freelancers with businesses to deliver industry-leading solutions. Whether you're looking for expertise in technology, creative design, or strategic project management, we have the professionals to meet your business needs.
        </p>
      </section>

      {/* About Us Section */}
      <section style={sectionStyles}>
        <h3 style={sectionTitle}>About Us</h3>
        <p style={textBlock}>
          P Technologies is a global leader in freelance talent management. Our platform allows businesses of all sizes to connect with top-tier professionals who can help drive their projects to success. We take pride in providing flexible, scalable, and highly specialized solutions, ensuring every client gets the expertise they need.
        </p>
        <p style={textBlock}>
          Our platform is built on a foundation of trust and transparency. We vet every freelancer to ensure the highest quality of work and a seamless collaboration process. Whether you’re a startup looking for rapid growth or a well-established company aiming to optimize your workflow, P Technologies is here to help.
        </p>
      </section>

      {/* Board Members Section */}
      <section style={sectionStyles}>
        <h3 style={{ ...sectionTitle, textAlign: 'center' }}>Our Board of Members</h3>
        <div style={cardContainer}>
          {/* Chairman */}
          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h4 style={cardTitle}>P V Srinivasa</h4>
            <p style={cardSubtitle}>Chairman</p>
            <p style={textBlock}>
              With 35 years of experience in business leadership, P V Srinivasa has been instrumental in guiding P Technologies to global success. His leadership and strategic foresight continue to drive the company’s expansion and innovation.
            </p>
          </div>

          {/* CEO */}
          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h4 style={cardTitle}>P Koushik</h4>
            <p style={cardSubtitle}>CEO</p>
            <p style={textBlock}>
              As CEO, P Koushik brings over 20 years of leadership experience. His focus on client satisfaction, innovation, and operational excellence ensures that P Technologies continues to deliver top-tier solutions across industries.
            </p>
          </div>

          {/* CTO 1 */}
          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h4 style={cardTitle}>N Anusha</h4>
            <p style={cardSubtitle}>CTO</p>
            <p style={textBlock}>
              With over 12 years of experience in technology innovation, N Anusha leads the technological strategy at P Technologies. She ensures that the company remains at the forefront of cutting-edge solutions.
            </p>
          </div>

          {/* CTO 2 */}
          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h4 style={cardTitle}>P Rajkumar</h4>
            <p style={cardSubtitle}>CTO</p>
            <p style={textBlock}>
              P Rajkumar brings his deep technical expertise to P Technologies as co-CTO, leading infrastructure and systems engineering. His work ensures that our products are reliable, scalable, and secure.
            </p>
          </div>

          {/* COO */}
          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h4 style={cardTitle}>P Sreekar</h4>
            <p style={cardSubtitle}>COO</p>
            <p style={textBlock}>
              As COO, P Sreekar oversees all day-to-day operations at P Technologies. His focus on operational efficiency ensures that every project runs smoothly and meets the highest standards.
            </p>
          </div>

          {/* Business Development */}
          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h4 style={cardTitle}>U Tilak</h4>
            <p style={cardSubtitle}>Business Development & General Manager</p>
            <p style={textBlock}>
              With 15 years of experience in business development, Tilak leads P Technologies’ global expansion efforts. He focuses on building partnerships and identifying growth opportunities.
            </p>
          </div>

          {/* HR Lead */}
          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h4 style={cardTitle}>P Sravya</h4>
            <p style={cardSubtitle}>Human Resources Lead</p>
            <p style={textBlock}>
              As the head of HR, P Sravya ensures that P Technologies attracts and retains the best talent. Her work in people development ensures that our teams are motivated and supported.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{ ...sectionStyles, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <h3 style={sectionTitle}>Our Vision</h3>
          <p style={textBlock}>
            At P Technologies, our vision is to create seamless connections between businesses and freelancers globally. We are committed to providing the expertise, flexibility, and innovation needed to drive projects to success.
          </p>
        </div>
        <img src="dd.avif" alt="Vision" style={imageStyles} />
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: 'center', marginTop: '60px' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Ready to Elevate Your Project?</h3>
        <p style={{ fontSize: '18px', color: '#666' }}>Join P Technologies today and partner with top-tier freelancers to bring your vision to life.</p>
        <button
          style={buttonStyle}
          onClick={handleExploreClick}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff4054')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#f7636c')}
        >
          Explore Services
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
