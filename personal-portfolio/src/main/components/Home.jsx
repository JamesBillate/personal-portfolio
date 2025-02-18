import { useState, useEffect } from "react";
import motion, { gradient_text_animation } from "./animations/animations.js";

//Routing
import Home_Nav from "./Home_Nav.jsx";

//Styles
import "./styles/Home.css";

const titles = ["Web Developer", "Photographer", "Photo Editor"];

const Home = () => {
  //Animation for the top skills
  const [skillShow, setSkillShow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillShow((prevIndex) => (prevIndex + 1) % titles.length);
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
        className="pb-2 mb-16 text-center text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-300 via-green-500 to-yellow-300 bg-clip-text sm:text-6xl md:text-7xl lg:text-8xl animate-gradient"
        key={titles[skillShow]}
        {...gradient_text_animation}
      >
        {titles[skillShow]}
      </motion.p>

      {/* Home Navigation */}
      <Home_Nav />
    </div>
  );
};

export default Home;
