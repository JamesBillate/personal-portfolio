import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
     mx-15 flex justify-between items-center sticky right-0 left-0 z-1 transition-all duration-300 ${
       isScrolled
         ? "bg-gray-900/70 backdrop-blur shadow-md rounded-2xl p-2 px-10 top-5 text-xl"
         : "bg-transparent p-10 top-0 "
     }`}
    >
      <Link
        to="/"
        className="text-xl font-semibold hover:text-lime-400 transition-colors duration-500 ease-in-out"
      >
        <motion.i
          className="fa-solid fa-arrow-left mr-2"
          initial={{ x: -5 }}
          animate={{ x: [-5, 0, -5] }} // Moves slightly left and right
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
        Back
      </Link>
      <div className="text-3xl sm:text-4xl md:text-6xl pb-2 font-semibold bg-gradient-to-r from-emerald-300 via-green-500 to-yellow-300 text-transparent bg-clip-text animate-gradient">
        {"/" + props.pageName}
      </div>
    </nav>
  );
};

export default Header;
