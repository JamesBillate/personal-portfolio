import React from "react";
import { Link } from "react-router-dom";

const linkStyle =
  "text-5xl mb-3 animate-pulse text-color from-red-500 via-purple-500 to-blue-500";

const Navbar = () => {
  return (
    <nav className="navbar flex flex-col">
      <Link to="/projects" className={linkStyle}>
        {"<Projects />"}
      </Link>
      <Link to="/about" className={linkStyle}>
        {"<About />"}
      </Link>
      <Link to="/contact" className={linkStyle}>
        {"<Contact />"}
      </Link>
    </nav>
  );
};

export default Navbar;
