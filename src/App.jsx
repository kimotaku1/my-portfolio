import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './index.css';  // Assuming this file contains Tailwind directives
import ScrollToTop from './Components/ScrollToTop ';
import Project from './Components/MyWork/Project';
import ContactPage from './Components/Contact/ContactPage';

const App = () => {
  return (
    <Router basename="/portfolio" >
      <Routes>
        {/* Route for the main homepage */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <MyWork />
              <Contact />
              <Footer />
              <ScrollToTop/>
            </>
          }
        />
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
