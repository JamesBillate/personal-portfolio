import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <h1 className="mb-1 text-2xl">Hello, I am James Billate a</h1>
      <p className="mb-10 font-bold text-7xl">Web Developer</p>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
