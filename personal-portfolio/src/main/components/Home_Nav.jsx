import React from "react";
import { animate, motion } from "motion/react";
import { Link } from "react-router-dom";

const linkStyle =
  "text-4xl text-center mx-5 font-semibold flex flex-col hover:text-lime-400 transition-colors duration-500 ease-in-out ";
const arrowUp = "text-lg opacity-50 mt-3 fa-duotone fa-solid fa-arrow-up ";
const navStyle = "flex flex-wrap justify-center gap-10";

const Home_Nav = () => {
  return (
    <nav className={navStyle}>
      <Link to="/projects" className={linkStyle}>
        {"/Projects"}
        <motion.i
          className={arrowUp}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
      </Link>
      <Link to="/aboutme" className={linkStyle}>
        {"/AboutMe"}
        <motion.i
          className={arrowUp}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
      </Link>
      <Link to="/connect" className={linkStyle}>
        {"/Connect"}
        <motion.i
          className={arrowUp}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
      </Link>
    </nav>
  );
};

export default Home_Nav;
