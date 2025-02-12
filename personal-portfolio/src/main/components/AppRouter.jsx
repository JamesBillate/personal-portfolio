import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={<Home />} />
        <Route path="/projects" component={<Projects />} />
        <Route path="/about" component={<About />} />
        <Route path="/contact" component={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
