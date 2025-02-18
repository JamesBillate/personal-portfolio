import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-10 flex items-center justify-between font-semibold transition-all duration-300 ${
        isScrolled
          ? "mx-4 rounded-b-2xl bg-gray-900/70 px-7 py-4 text-sm shadow-md backdrop-blur"
          : "mx-15 bg-transparent py-10"
      }`}
    >
      <Link
        to="/"
        className="text-xl transition-colors duration-500 ease-in-out hover:text-lime-400"
      >
        <motion.i
          className="mr-2 fa-solid fa-arrow-left"
          initial={{ x: -5 }}
          animate={{ x: [-5, 0, -5] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
        Back
      </Link>

      <div className="bg-gradient-to-r from-emerald-300 via-green-500 to-yellow-300 bg-clip-text pb-1 text-2xl text-transparent animate-gradient sm:text-3xl md:text-5xl">
        {"/" + props.pageName}
      </div>
    </nav>
  );
};

export default Header;
