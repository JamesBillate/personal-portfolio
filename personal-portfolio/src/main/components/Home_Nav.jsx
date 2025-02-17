import React from "react";
import { animate, motion } from "motion/react";
import { Link } from "react-router-dom";

//Tailwind Styles
const navStyle = "grid md:grid-cols-3 justify-center gap-5";

const linkStyle =
  "text-4xl text-center font-semibold w-60 grid grid-cols-2 md:grid-cols-1" +
  " hover:text-lime-400 transition-colors duration-500 ease-in-out";

const arrowUp =
  "fa-duotone fa-solid fa-arrow-up ml-10 mt-3 mb-2 md:ml-0 text-lg opacity-50 rotate-270 md:rotate-0";

function linkCustom(link) {
  return (
    <>
      <div className={linkStyle}>
        <Link to={`/${link}`}>{`/${link}`}</Link>
        <motion.i
          className={arrowUp}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </>
  );
}

const Home_Nav = () => {
  return (
    <nav className={navStyle}>
      {linkCustom("Projects")}
      {linkCustom("AboutMe")}
      {linkCustom("Connect")}
    </nav>
  );
};

export default Home_Nav;
