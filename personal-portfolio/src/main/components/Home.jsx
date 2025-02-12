import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

import "./styles/Home.css";

const skillStyle =
  "mb-15 font-bold text-8xl bg-gradient-to-r from-emerald-300 via-green-500 to-yellow-300 text-transparent bg-clip-text animate-gradient";

const Home = () => {
  return (
    <div className="home mb-10">
      <h1 className="mb-1 text-3xl">Hello, I am James Billate a</h1>
      <p className={skillStyle}>Web Developer</p>

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
