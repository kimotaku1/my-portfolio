import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./index.css"; // Assuming this file contains Tailwind directives
import ScrollToTop from "./Components/ScrollToTop ";
import Project from "./Components/MyWork/Project";
import ContactPage from "./Components/Contact/ContactPage";
import ScrollToTopPage from "./Components/ScrollToTopPage";

const App = () => {
  return (
    <Router>
      <ScrollToTopPage />
      <Routes>
        {/* Route for the main homepage */}
        <Route
          path="/"
          element={
            <>
            <main className="flex min-h-screen flex-col bg-[#121212]">
              <Navbar />
              <div className="container mt-5 mx-auto px-12 py-4">
                <Hero />
                <About />
                <Services />
                <MyWork />
                <Contact />
              </div>
              <Footer />
              <ScrollToTop />
              </main>
            </>
          }
        />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
