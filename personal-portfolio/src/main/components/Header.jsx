import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="py-10 mx-15 flex justify-between items-center">
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
