import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const linkStyle =
  "text-3xl font-light w-50 px-10 pb-3 pt-2 border border-gray-500 rounded-lg";

const navStyle = "flex flex-wrap justify-center gap-10";

const Navbar = () => {
  return (
    <nav className={navStyle}>
      <Link to="/projects" className={linkStyle}>
        {"Projects"}
      </Link>
      <Link to="/about" className={linkStyle}>
        {"About"}
      </Link>
      <Link to="/contact" className={linkStyle}>
        {"Contact"}
      </Link>
    </nav>
  );
};

export default Navbar;
