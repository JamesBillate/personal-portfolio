import React, { useState, useEffect } from "react";
import motion, { gradient_text_animation } from "./animations/animations.js";

//Routing
import Home_Nav from "./Home_Nav.jsx";

//Styles
import "./styles/Home.css";

const skillTitles = ["Web Developer", "Photographer", "Photo Editor"];

const Home = () => {
  //Animation for the top skills
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skillTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="home mb-10">
      {/* Name Heading */}
      <h1 className="text-center mb-1 mt-30 text-md md:text-xl lg:text-2xl">
        Hello, I am James Billate a
      </h1>

      {/* Top Skills */}
      <motion.p
        className="text "
        // text-4xl
        // sm:text-6xl
        // md:text-7xl
        // lg:text-8xl
        // mb-15
        // pb-2
        // font-bold
        // text-center
        // bg-gradient-to-r
        // from-emerald-300
        // via-green-500
        // to-yellow-300
        // text-transparent
        // bg-clip-text
        // animate-gradient
        key={skillTitles[index]}
        {...gradient_text_animation}
      >
        {skillTitles[index]}
      </motion.p>

      {/* Home Navigation */}
      <Home_Nav />
    </div>
  );
};

export default Home;
