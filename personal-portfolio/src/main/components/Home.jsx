import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import motion, { gradient_text } from "./animations/animations.js";

//Routing
import NavBar_Route from "./Navbar_Route";
import Projects from "./Projects.jsx";
import About from "./About";
import Contact from "./Contact";

//Styles
import "./styles/Home.css";

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
            <h1 className="mb-1 mt-[20vh] text-3xl text-center">
              Hello, I am James Billate a
            </h1>
            <motion.p
              className="mb-15 pb-2 font-bold text-8xl text-center bg-gradient-to-r from-emerald-300 via-green-500 to-yellow-300 text-transparent bg-clip-text animate-gradient"
              key={skillTitles[index]}
              {...gradient_text}
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
            <div className="w-screen flex flex-wrap my-5">
              <div
                className="cursor-pointer py-5 ml-15 flex-none"
                onClick={() => setPageRender(true)}
              >
                Back
              </div>
              <div className="flex flex-3 md:flex-7 items-center justify-center font-bold text-xl bg-gradient-to-r from-emerald-300 via-green-500 to-yellow-300 text-transparent bg-clip-text animate-gradient">
                Projects
              </div>
              <div className="py-5 flex-1 mr-15 text-right">James Billate</div>
            </div>
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
