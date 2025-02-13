import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "motion/react";

//Routing
import NavBar_Route from "./Navbar_Route";

import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

import "./styles/Home.css";

const skillStyle =
  "mb-15 pb-2 font-bold text-8xl bg-gradient-to-r from-emerald-300 via-green-500 to-yellow-300 text-transparent bg-clip-text animate-gradient";

const skillTitles = ["Web Developer", "Photographer", "Photo Editor"];

const Home = () => {
  //Animation
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skillTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  //Page rendering
  const [pageRender, setPageRender] = useState(true);

  return (
    <div className="home mb-10">
      <Router>
        {pageRender ? (
          <>
            <h1 className="mb-1 text-3xl">Hello, I am James Billate a</h1>
            <motion.p
              className={skillStyle}
              key={skillTitles[index]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {skillTitles[index]}
            </motion.p>
            <NavBar_Route
              pageRender={pageRender}
              setPageRender={setPageRender}
            />
          </>
        ) : (
          <>
            <button onClick={() => setPageRender(true)}>Back</button>
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
};

export default Home;
