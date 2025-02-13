import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

import "https://kit.fontawesome.com/f4157ee392.js";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default Route */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/connect" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
