import React from "react";
import { Link } from "react-router-dom";

const linkStyle =
  "text-3xl text-center font-light w-50 px-10 pb-3 pt-2 border border-gray-500 rounded-lg";

const navStyle = "flex flex-wrap justify-center gap-10";

const Navbar_Route = ({ pageRender, setPageRender }) => {
  return (
    <nav className={navStyle}>
      <Link
        onClick={() => setPageRender(!pageRender)}
        to="/projects"
        className={linkStyle}
      >
        {"Projects"}
      </Link>
      <Link
        onClick={() => setPageRender(!pageRender)}
        to="/about"
        className={linkStyle}
      >
        {"About"}
      </Link>
      <Link
        onClick={() => setPageRender(!pageRender)}
        to="/contact"
        className={linkStyle}
      >
        {"Contact"}
      </Link>
    </nav>
  );
};

export default Navbar_Route;
