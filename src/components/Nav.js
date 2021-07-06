import React from "react";
import { Link } from "react-router-dom";
import "../style/App.css";

function Nav() {
  return (
    <nav>
      <ul>
        <Link
          to="/"
          style={{ padding: "10px", display: "inline-block" }}
          className="home"
        >
          <li>Home</li>
        </Link>
        <Link
          to="/resume"
          style={{ padding: "10px", display: "inline-block" }}
          className="resume"
        >
          <li>Resume</li>
        </Link>
        <Link
          to="/portfolio"
          style={{ padding: "10px", display: "inline-block" }}
          className="portfolio"
        >
          <li>Portfolio</li>
        </Link>
        <Link
          to="/contact"
          style={{ padding: "10px", display: "inline-block" }}
          className="contact"
        >
          <li>Contant</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
