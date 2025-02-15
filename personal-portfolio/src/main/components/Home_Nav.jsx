import React from "react";
import { animate, motion } from "motion/react";
import { Link } from "react-router-dom";

const linkStyle =
  "text-4xl text-center mx-5 font-semibold grid grid-cols-2 md:grid-cols-1" +
  " hover:text-lime-400 transition-colors duration-500 ease-in-out";
const arrowUp =
  "text-lg opacity-50 mt-3 mb-2 rotate-270 md:rotate-0 fa-duotone fa-solid fa-arrow-up ";
const navStyle = "grid md:grid-cols-3 justify-center gap-10";

function linkCustom(link) {
  return (
    <>
      <Link to={`/${link}`} className={linkStyle}>
        {`/${link}`}
        <motion.i
          className={arrowUp}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
      </Link>
    </>
  );
}

const Home_Nav = () => {
  return (
    <nav className={navStyle}>
      {linkCustom("Projects")}
      {linkCustom("AboutMe")}
      {linkCustom("Contact")}
    </nav>
  );
};

export default Home_Nav;
