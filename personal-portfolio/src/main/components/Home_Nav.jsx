import { motion } from "motion/react";
import { Link } from "react-router-dom";

//Tailwind Styles
const navStyle = "grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center";

const linkStyle =
  "text-4xl font-semibold text-center w-60 grid grid-cols-2 md:grid-cols-1 transition-colors duration-500 ease-in-out hover:text-lime-400";

const arrowUp =
  "fa-solid fa-arrow-up text-lg opacity-50 ml-10 mt-3 mb-2 sm:ml-10 md:ml-0 rotate-270 md:rotate-0";

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
