import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import AppDesignDevelopment from './pages/AppDesignDevelopment';
import WebDevAutomation from './pages/WebDevAutomation';
import WebAppTesting from './pages/WebAppTesting';
import AppianBPMSolutions from './pages/AppianBPMSolutions';
import GraphicDesign from './pages/GraphicDesign';
import ContactUs from './pages/ContactUs';

import LoginSignup from './pages/LoginSignup';
import ThankYou from './pages/ThankYou'; // Import ThankYou

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/app-design-development" element={<AppDesignDevelopment />} />
        <Route path="/web-dev-automation" element={<WebDevAutomation />} />
        <Route path="/web-application-testing" element={<WebAppTesting />} />
        <Route path="/appian-bpm-solutions" element={<AppianBPMSolutions />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/thankyou" element={<ThankYou />} /> {/* Add ThankYou route */}
      </Routes>
    </Router>
  );
};

export default App;
