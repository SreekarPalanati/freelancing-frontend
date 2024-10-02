// // src/pages/Services.js
// import React from 'react';

// const Services = () => {
//   return (
//     <div style={{ padding: "40px", fontSize: "18px", lineHeight: "1.8", backgroundColor: "#f4f4f4" }}>
//       {/* Header Section */}
//       <h2 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", marginBottom: "40px", color: "#333" }}>
//         Our Premium Services
//       </h2>
//       <p style={{ fontSize: "22px", textAlign: "center", maxWidth: "900px", margin: "0 auto", marginBottom: "60px", color: "#555" }}>
//         At <strong>P Technologies</strong>, we provide a comprehensive range of services to meet the dynamic needs of businesses, 
//         startups, and individuals. Our team of professionals delivers quality-driven solutions that are both timely and effective. 
//         We ensure the highest standards of excellence across all the services we offer.
//       </p>

//       {/* Services Section */}
//       <div style={servicesGridStyle}>
//         {/* Service 1: App Design & Development */}
//         <div style={serviceCardStyle} className="service-card">
//           <div className="service-icon">
//             <img
//               src="app design.jpg"
//               alt="App Design and Development"
//               style={serviceImageStyle}
//             />
//           </div>
//           <h3 style={serviceTitleStyle}>App Design & Development</h3>
//           <p style={serviceTextStyle}>
//             We create visually stunning and highly functional mobile applications, designed to provide the best user experience for your clients.
//           </p>
//         </div>

//         {/* Service 2: Web Development & Automation */}
//         <div style={serviceCardStyle} className="service-card">
//           <div className="service-icon">
//             <img
//               src="web development and automation.webp"
//               alt="Web Development and Automation"
//               style={serviceImageStyle}
//             />
//           </div>
//           <h3 style={serviceTitleStyle}>Web Development & Automation</h3>
//           <p style={serviceTextStyle}>
//             Our websites are tailored to your business needs, with automation solutions to streamline your operations and increase efficiency.
//           </p>
//         </div>

//         {/* Service 3: Web Application Testing */}
//         <div style={serviceCardStyle} className="service-card">
//           <div className="service-icon">
//             <img
//               src="web testing.jpeg"
//               alt="Web Application Testing"
//               style={serviceImageStyle}
//             />
//           </div>
//           <h3 style={serviceTitleStyle}>Web Application Testing</h3>
//           <p style={serviceTextStyle}>
//             Our rigorous web application testing ensures your applications run smoothly, securely, and without interruption.
//           </p>
//         </div>

//         {/* Service 4: Appian BPM Solutions */}
//         <div style={serviceCardStyle} className="service-card">
//           <div className="service-icon">
//             <img
//               src="appian.jpeg"
//               alt="Appian BPM Solutions"
//               style={serviceImageStyle}
//             />
//           </div>
//           <h3 style={serviceTitleStyle}>Appian BPM Solutions</h3>
//           <p style={serviceTextStyle}>
//             We offer Appian BPM solutions that help businesses automate and streamline their workflows for optimal performance.
//           </p>
//         </div>

//         {/* Service 5: Graphic Design */}
//         <div style={serviceCardStyle} className="service-card">
//           <div className="service-icon">
//             <img
//               src="desgin.jpeg"
//               alt="Graphic Design"
//               style={serviceImageStyle}
//             />
//           </div>
//           <h3 style={serviceTitleStyle}>Graphic Design</h3>
//           <p style={serviceTextStyle}>
//             Our creative designers craft exceptional visuals that communicate your brand's story and leave a lasting impression.
//           </p>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <section style={whyChooseUsStyle}>
//         <h3 style={{ fontSize: "28px", fontWeight: "bold", color: "#333" }}>Why Choose P Technologies?</h3>
//         <p style={{ fontSize: "20px", maxWidth: "800px", margin: "0 auto", color: "#666" }}>
//           We take pride in providing personalized, high-quality services. Our commitment to meeting deadlines and delivering 
//           results that exceed expectations has earned us a reputation for excellence. Whether you're a startup or an established business, 
//           we're here to empower your growth with cutting-edge solutions and a team of seasoned experts.
//         </p>
//       </section>
//     </div>
//   );
// };

// /* Styles */
// const servicesGridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//   gap: "20px",
//   marginTop: "40px",
// };

// const serviceCardStyle = {
//   padding: "20px",
//   backgroundColor: "#fff",
//   borderRadius: "15px",
//   boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//   textAlign: "center",
//   transition: "transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease", 
//   overflow: "hidden",
//   position: "relative",
// };

// const serviceImageStyle = {
//   borderRadius: "10px",
//   width: "100%",
//   height: "200px",
//   objectFit: "cover",
//   transition: "transform 0.4s ease",
// };

// const serviceTitleStyle = {
//   fontSize: "22px",
//   fontWeight: "bold",
//   marginTop: "15px",
//   color: "#333",
// };

// const serviceTextStyle = {
//   fontSize: "18px",
//   color: "#666",
//   marginTop: "10px",
// };

// const whyChooseUsStyle = {
//   marginTop: "60px",
//   padding: "40px",
//   backgroundColor: "#fff",
//   borderRadius: "10px",
//   textAlign: "center",
//   boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
// };

// /* Hover Effect (add to CSS or inline) */
// const styleSheet = document.styleSheets[0];
// styleSheet.insertRule(`
//   .service-card:hover {
//     transform: scale(1.08);
//     box-shadow: 0 8px 16px rgba(0,0,0,0.2);
//     background-color: #f0f0f0;
//   }
// `, styleSheet.cssRules.length);

// styleSheet.insertRule(`
//   .service-card:hover img {
//     transform: scale(1.1);
//   }
// `, styleSheet.cssRules.length);

// styleSheet.insertRule(`
//   .service-card::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 5px;
//     background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
//     transition: height 0.3s ease;
//   }
// `, styleSheet.cssRules.length);

// styleSheet.insertRule(`
//   .service-card:hover::before {
//     height: 100%;
//     opacity: 0.1;
//   }
// `, styleSheet.cssRules.length);

// // export default Services;
// import React from 'react';

// const Services = () => {
//   return (
//     <div style={{ padding: "40px", fontSize: "18px", lineHeight: "1.8", backgroundColor: "#2e2e2e", color: "#ddd" }}>
//       {/* Header Section */}
//       <h2 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", marginBottom: "40px", color: "#fff" }}>
//         Our Premium Services
//       </h2>
//       <p style={{ fontSize: "22px", textAlign: "center", maxWidth: "900px", margin: "0 auto", marginBottom: "60px", color: "#ccc" }}>
//         At <strong>P Technologies</strong>, we provide a comprehensive range of services to meet the dynamic needs of businesses, 
//         startups, and individuals. Our team of professionals delivers quality-driven solutions that are both timely and effective. 
//         We ensure the highest standards of excellence across all the services we offer.
//       </p>

//       {/* Services Section */}
//       <div style={servicesGridStyle}>
//         {/* Service 1: App Design & Development */}
//         <div style={serviceCardStyle} className="service-card">
//           <div className="service-icon">
//             <img
//               src="app design.jpg"
//               alt="App Design and Development"
//               style={serviceImageStyle}
//             />
//           </div>
//           <h3 style={serviceTitleStyle}>App Design & Development</h3>
//           <p style={serviceTextStyle}>
//             We create visually stunning and highly functional mobile applications, designed to provide the best user experience for your clients.
//           </p>
//         </div>

//         {/* Service 2: Web Development & Automation */}
//         <div style={serviceCardStyle} className="service-card">
//           <div className="service-icon">
//             <img
//               src="web development and automation.webp"
//               alt="Web Development and Automation"
//               style={serviceImageStyle}
//             />
//           </div>
//           <h3 style={serviceTitleStyle}>Web Development & Automation</h3>
//           <p style={serviceTextStyle}>
//             Our websites are tailored to your business needs, with automation solutions to streamline your operations and increase efficiency.
//           </p>
//         </div>

//         {/* Service 3: Web Application Testing */}
//         <div style={serviceCardStyle} className="service-card">
//           <div className="service-icon">
//             <img
//               src="web testing.jpeg"
//               alt="Web Application Testing"
//               style={serviceImageStyle}
//             />
//           </div>
//           <h3 style={serviceTitleStyle}>Web Application Testing</h3>
//           <p style={serviceTextStyle}>
//             Our rigorous web application testing ensures your applications run smoothly, securely, and without interruption.
//           </p>
//         </div>

//         {/* Service 4: Appian BPM Solutions */}
//         <div style={serviceCardStyle} className="service-card">
//           <div className="service-icon">
//             <img
//               src="appian.jpeg"
//               alt="Appian BPM Solutions"
//               style={serviceImageStyle}
//             />
//           </div>
//           <h3 style={serviceTitleStyle}>Appian BPM Solutions</h3>
//           <p style={serviceTextStyle}>
//             We offer Appian BPM solutions that help businesses automate and streamline their workflows for optimal performance.
//           </p>
//         </div>

//         {/* Service 5: Graphic Design */}
//         <div style={serviceCardStyle} className="service-card">
//           <div className="service-icon">
//             <img
//               src="desgin.jpeg"
//               alt="Graphic Design"
//               style={serviceImageStyle}
//             />
//           </div>
//           <h3 style={serviceTitleStyle}>Graphic Design</h3>
//           <p style={serviceTextStyle}>
//             Our creative designers craft exceptional visuals that communicate your brand's story and leave a lasting impression.
//           </p>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <section style={whyChooseUsStyle}>
//         <h3 style={{ fontSize: "28px", fontWeight: "bold", color: "#fff" }}>Why Choose P Technologies?</h3>
//         <p style={{ fontSize: "20px", maxWidth: "800px", margin: "0 auto", color: "#bbb" }}>
//           We take pride in providing personalized, high-quality services. Our commitment to meeting deadlines and delivering 
//           results that exceed expectations has earned us a reputation for excellence. Whether you're a startup or an established business, 
//           we're here to empower your growth with cutting-edge solutions and a team of seasoned experts.
//         </p>
//       </section>
//     </div>
//   );
// };

// /* Styles */
// const servicesGridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//   gap: "20px",
//   marginTop: "40px",
// };

// const serviceCardStyle = {
//   padding: "20px",
//   backgroundColor: "#3a3a3a",
//   borderRadius: "15px",
//   boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//   textAlign: "center",
//   transition: "transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease", 
//   overflow: "hidden",
//   position: "relative",
// };

// const serviceImageStyle = {
//   borderRadius: "10px",
//   width: "100%",
//   height: "200px",
//   objectFit: "cover",
//   transition: "transform 0.4s ease",
// };

// const serviceTitleStyle = {
//   fontSize: "22px",
//   fontWeight: "bold",
//   marginTop: "15px",
//   color: "#fff",
// };

// const serviceTextStyle = {
//   fontSize: "18px",
//   color: "#ccc",
//   marginTop: "10px",
// };

// const whyChooseUsStyle = {
//   marginTop: "60px",
//   padding: "40px",
//   backgroundColor: "#3a3a3a",
//   borderRadius: "10px",
//   textAlign: "center",
//   boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
// };

// /* Hover Effect (add to CSS or inline) */
// const styleSheet = document.styleSheets[0];
// styleSheet.insertRule(`
//   .service-card:hover {
//     transform: scale(1.08);
//     box-shadow: 0 8px 16px rgba(0,0,0,0.3);
//     background-color: #505050;
//   }
// `, styleSheet.cssRules.length);

// styleSheet.insertRule(`
//   .service-card:hover img {
//     transform: scale(1.1);
//   }
// `, styleSheet.cssRules.length);

// styleSheet.insertRule(`
//   .service-card::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 5px;
//     background: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
//     transition: height 0.3s ease;
//   }
// `, styleSheet.cssRules.length);

// styleSheet.insertRule(`
//   .service-card:hover::before {
//     height: 100%;
//     opacity: 0.1;
//   }
// `, styleSheet.cssRules.length);

// export default Services;







// import React from 'react';
// import { Link } from 'react-router-dom';

// const Services = () => {
//   return (
//     <div style={{ padding: "40px", fontSize: "18px", lineHeight: "1.8", backgroundColor: "#2e2e2e", color: "#ddd" }}>
//       {/* Header Section */}
//       <h2 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", marginBottom: "40px", color: "#fff" }}>
//         Our Premium Services
//       </h2>
//       <p style={{ fontSize: "22px", textAlign: "center", maxWidth: "900px", margin: "0 auto", marginBottom: "60px", color: "#ccc" }}>
//         At <strong>P Technologies</strong>, we provide a comprehensive range of services to meet the dynamic needs of businesses, 
//         startups, and individuals. Our team of professionals delivers quality-driven solutions that are both timely and effective. 
//         We ensure the highest standards of excellence across all the services we offer.
//       </p>

//       {/* Services Section */}
//       <div style={servicesGridStyle}>
//         {/* Service 1: App Design & Development */}
//         <Link to="/app-design-development" style={linkStyle}>
//   <div style={serviceCardStyle} className="service-card">
//     <div className="service-icon">
//       <img
//         src="app design.jpg"
//         alt="App Design and Development"
//         style={serviceImageStyle}
//       />
//     </div>
//     <h3 style={serviceTitleStyle}>App Design & Development</h3>
//     <p style={serviceTextStyle}>
//       We create visually stunning and highly functional mobile applications, designed to provide the best user experience for your clients.
//     </p>
//   </div>
// </Link>

// <Link to="/web-dev-automation" style={linkStyle}>
//   <div style={serviceCardStyle} className="service-card">
//     <div className="service-icon">
//       <img
//         src="web development and automation.webp"
//         alt="Web Development and Automation"
//         style={serviceImageStyle}
//       />
//     </div>
//     <h3 style={serviceTitleStyle}>Web Development & Automation</h3>
//     <p style={serviceTextStyle}>
//       Our websites are tailored to your business needs, with automation solutions to streamline your operations and increase efficiency.
//     </p>
//   </div>
// </Link>

// <Link to="/web-application-testing" style={linkStyle}>
//   <div style={serviceCardStyle} className="service-card">
//     <div className="service-icon">
//       <img
//         src="web testing.jpeg"
//         alt="Web Application Testing"
//         style={serviceImageStyle}
//       />
//     </div>
//     <h3 style={serviceTitleStyle}>Web Application Testing</h3>
//     <p style={serviceTextStyle}>
//       Our rigorous web application testing ensures your applications run smoothly, securely, and without interruption.
//     </p>
//   </div>
// </Link>

// <Link to="/appian-bpm-solutions" style={linkStyle}>
//   <div style={serviceCardStyle} className="service-card">
//     <div className="service-icon">
//       <img
//         src="appian.jpeg"
//         alt="Appian BPM Solutions"
//         style={serviceImageStyle}
//       />
//     </div>
//     <h3 style={serviceTitleStyle}>Appian BPM Solutions</h3>
//     <p style={serviceTextStyle}>
//       We offer Appian BPM solutions that help businesses automate and streamline their workflows for optimal performance.
//     </p>
//   </div>
// </Link>

// <Link to="/graphic-design" style={linkStyle}>
//   <div style={serviceCardStyle} className="service-card">
//     <div className="service-icon">
//       <img
//         src="desgin.jpeg"
//         alt="Graphic Design"
//         style={serviceImageStyle}
//       />
//     </div>
//     <h3 style={serviceTitleStyle}>Graphic Design</h3>
//     <p style={serviceTextStyle}>
//       Our creative designers craft exceptional visuals that communicate your brand's story and leave a lasting impression.
//     </p>
//   </div>
// </Link>

//       </div>

//       {/* Why Choose Us Section */}
//       <section style={whyChooseUsStyle}>
//         <h3 style={{ fontSize: "28px", fontWeight: "bold", color: "#fff" }}>Why Choose P Technologies?</h3>
//         <p style={{ fontSize: "20px", maxWidth: "800px", margin: "0 auto", color: "#bbb" }}>
//           We take pride in providing personalized, high-quality services. Our commitment to meeting deadlines and delivering 
//           results that exceed expectations has earned us a reputation for excellence. Whether you're a startup or an established business, 
//           we're here to empower your growth with cutting-edge solutions and a team of seasoned experts.
//         </p>
//       </section>
//     </div>
//   );
// };

// /* Styles */
// const servicesGridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//   gap: "20px",
//   marginTop: "40px",
// };

// const serviceCardStyle = {
//   padding: "20px",
//   backgroundColor: "#3a3a3a",
//   borderRadius: "15px",
//   boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//   textAlign: "center",
//   transition: "transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease", 
//   overflow: "hidden",
//   position: "relative",
// };

// const serviceImageStyle = {
//   borderRadius: "10px",
//   width: "100%",
//   height: "200px",
//   objectFit: "cover",
//   transition: "transform 0.4s ease",
// };

// const serviceTitleStyle = {
//   fontSize: "22px",
//   fontWeight: "bold",
//   marginTop: "15px",
//   color: "#fff",
// };

// const serviceTextStyle = {
//   fontSize: "18px",
//   color: "#ccc",
//   marginTop: "10px",
// };

// const whyChooseUsStyle = {
//   marginTop: "60px",
//   padding: "40px",
//   backgroundColor: "#3a3a3a",
//   borderRadius: "10px",
//   textAlign: "center",
//   boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
// };

// const linkStyle = {
//   textDecoration: "none",
//   color: "inherit",
// };

// /* Hover Effect (add to CSS or inline) */
// const styleSheet = document.styleSheets[0];
// styleSheet.insertRule(`
//   .service-card:hover {
//     transform: scale(1.08);
//     box-shadow: 0 8px 16px rgba(0,0,0,0.3);
//     background-color: #505050;
//   }
// `, styleSheet.cssRules.length);

// styleSheet.insertRule(`
//   .service-card:hover img {
//     transform: scale(1.1);
//   }
// `, styleSheet.cssRules.length);

// styleSheet.insertRule(`
//   .service-card::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 5px;
//     background: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
//     transition: height 0.3s ease;
//   }
// `, styleSheet.cssRules.length);

// styleSheet.insertRule(`
//   .service-card:hover::before {
//     height: 100%;
//     opacity: 0.1;
//   }
// `, styleSheet.cssRules.length);

// export default Services;




import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <h2 style={styles.headerTitle}>Our Premium Services</h2>
      <p style={styles.headerDescription}>
        At <strong>P Technologies</strong>, we provide a comprehensive range of services to meet the dynamic needs of businesses, startups, and individuals. Our team of professionals delivers quality-driven solutions that are both timely and effective. We ensure the highest standards of excellence across all the services we offer.
      </p>

      {/* Services Section */}
      <div style={styles.servicesGrid}>
        {/* Service 1: App Design & Development */}
        <Link to="/app-design-development" style={styles.link}>
          <div style={styles.serviceCard} className="service-card">
            <div className="service-icon">
              <img
                src="app design.jpg"
                alt="App Design and Development"
                style={styles.serviceImage}
              />
            </div>
            <h3 style={styles.serviceTitle}>App Design & Development</h3>
            <p style={styles.serviceText}>
              We create visually stunning and highly functional mobile applications, designed to provide the best user experience for your clients.
            </p>
          </div>
        </Link>

        {/* Service 2: Web Development & Automation */}
        <Link to="/web-dev-automation" style={styles.link}>
          <div style={styles.serviceCard} className="service-card">
            <div className="service-icon">
              <img
                src="web development and automation.webp"
                alt="Web Development and Automation"
                style={styles.serviceImage}
              />
            </div>
            <h3 style={styles.serviceTitle}>Web Development & Automation</h3>
            <p style={styles.serviceText}>
              Our websites are tailored to your business needs, with automation solutions to streamline your operations and increase efficiency.
            </p>
          </div>
        </Link>

        {/* Service 3: Web Application Testing */}
        <Link to="/web-application-testing" style={styles.link}>
          <div style={styles.serviceCard} className="service-card">
            <div className="service-icon">
              <img
                src="web testing.jpeg"
                alt="Web Application Testing"
                style={styles.serviceImage}
              />
            </div>
            <h3 style={styles.serviceTitle}>Web Application Testing</h3>
            <p style={styles.serviceText}>
              Our rigorous web application testing ensures your applications run smoothly, securely, and without interruption.
            </p>
          </div>
        </Link>

        {/* Service 4: Appian BPM Solutions */}
        <Link to="/appian-bpm-solutions" style={styles.link}>
          <div style={styles.serviceCard} className="service-card">
            <div className="service-icon">
              <img
                src="appian.jpeg"
                alt="Appian BPM Solutions"
                style={styles.serviceImage}
              />
            </div>
            <h3 style={styles.serviceTitle}>Appian BPM Solutions</h3>
            <p style={styles.serviceText}>
              We offer Appian BPM solutions that help businesses automate and streamline their workflows for optimal performance.
            </p>
          </div>
        </Link>

        {/* Service 5: Graphic Design */}
        <Link to="/graphic-design" style={styles.link}>
          <div style={styles.serviceCard} className="service-card">
            <div className="service-icon">
              <img
                src="desgin.jpeg"
                alt="Graphic Design"
                style={styles.serviceImage}
              />
            </div>
            <h3 style={styles.serviceTitle}>Graphic Design</h3>
            <p style={styles.serviceText}>
              Our creative designers craft exceptional visuals that communicate your brand's story and leave a lasting impression.
            </p>
          </div>
        </Link>
      </div>

      {/* Why Choose Us Section */}
      <section style={styles.whyChooseUsSection}>
        <h3 style={styles.whyChooseUsTitle}>Why Choose P Technologies?</h3>
        <p style={styles.whyChooseUsText}>
          We take pride in providing personalized, high-quality services. Our commitment to meeting deadlines and delivering results that exceed expectations has earned us a reputation for excellence. Whether you're a startup or an established business, we're here to empower your growth with cutting-edge solutions and a team of seasoned experts.
        </p>
      </section>
    </div>
  );
};

/* Styles */
const styles = {
  pageContainer: {
    padding: '40px',
    fontSize: '18px',
    lineHeight: '1.8',
    backgroundColor: '#f9f9f9',
    color: '#333',
    '@media (max-width: 768px)': {
      padding: '20px',
    },
  },
  headerTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#f7636c',
    '@media (max-width: 768px)': {
      fontSize: '28px',
    },
  },
  headerDescription: {
    fontSize: '22px',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
    marginBottom: '60px',
    color: '#666',
    '@media (max-width: 768px)': {
      fontSize: '18px',
      marginBottom: '40px',
    },
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '40px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  serviceCard: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 768px)': {
      padding: '15px',
    },
  },
  serviceImage: {
    borderRadius: '10px',
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
    '@media (max-width: 768px)': {
      height: '150px',
    },
  },
  serviceTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginTop: '15px',
    color: '#f7636c',
    '@media (max-width: 768px)': {
      fontSize: '20px',
    },
  },
  serviceText: {
    fontSize: '18px',
    color: '#666',
    marginTop: '10px',
    '@media (max-width: 768px)': {
      fontSize: '16px',
    },
  },
  whyChooseUsSection: {
    marginTop: '60px',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    '@media (max-width: 768px)': {
      marginTop: '40px',
      padding: '30px',
    },
  },
  whyChooseUsTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#f7636c',
    '@media (max-width: 768px)': {
      fontSize: '24px',
    },
  },
  whyChooseUsText: {
    fontSize: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#666',
    '@media (max-width: 768px)': {
      fontSize: '18px',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

/* Hover Effect with Lights */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  .service-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
    transition: height 0.4s ease;
    z-index: -1;
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .service-card:hover::before {
    height: 100%;
    opacity: 0.1;
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .service-card:hover img {
    transform: scale(1.1);
  }
`, styleSheet.cssRules.length);

export default Services;
