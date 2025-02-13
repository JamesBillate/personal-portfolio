import React, { useState, useEffect } from "react";
import motion, { gradient_text_animation } from "./animations/animations.js";

//Routing
import Home_Nav from "./Home_Nav.jsx";

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

  return (
    <div className="home mb-10">
      <h1 className="mb-1 mt-30 text-3xl text-center">
        Hello, I am James Billate a
      </h1>
      <motion.p
        className="mb-15 pb-2 font-bold text-8xl text-center bg-gradient-to-r from-emerald-300 via-green-500 to-yellow-300 text-transparent bg-clip-text animate-gradient"
        key={skillTitles[index]}
        {...gradient_text_animation}
      >
        {skillTitles[index]}
      </motion.p>
      <Home_Nav />
    </div>
  );
};

export default Home;
