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
      className={`sm:mx-15 flex justify-between items-center sticky top-0 right-0 left-0 z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/70 backdrop-blur shadow-md rounded-b-2xl py-1 px-5 text-sm mx-4"
          : "bg-transparent py-10 mx-10"
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
      <div className="text-2xl sm:text-3xl md:text-5xl pb-2 font-semibold bg-gradient-to-r from-emerald-300 via-green-500 to-yellow-300 text-transparent bg-clip-text animate-gradient">
        {"/" + props.pageName}
      </div>
    </nav>
  );
};

export default Header;
