import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "../style/App.css";

function Nav() {
  return (
    <nav>
      <ul
        style={{
          paddingRight: isMobile ? "10px" : "70px",
          fontSize: isMobile ? "calc(2px + 2vmin)" : "calc(5px + 2vmin)",
          position: isMobile ? "absolute" : "fixed",
        }}
      >
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
