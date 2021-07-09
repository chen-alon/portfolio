import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "../style/App.css";

function Nav() {
  return (
    <nav>
      <ul style={ulStyle}>
        <Link to="/" style={linkStyle} className="home">
          <li>Home</li>
        </Link>
        <Link to="/resume" style={linkStyle} className="resume">
          <li>Resume</li>
        </Link>
        <Link to="/portfolio" style={linkStyle} className="portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/contact" style={linkStyle} className="contact">
          <li>Contant</li>
        </Link>
      </ul>
    </nav>
  );
}

const ulStyle = {
  backgroundColor: "rgb(240, 236, 236)",
  textTransform: "uppercase",
  listStyle: "none",
  right: "0",
  paddingRight: isMobile ? "5px" : "70px",
  fontSize: isMobile ? "calc(2px + 2vmin)" : "calc(5px + 2vmin)",
  position: isMobile ? "absolute" : "fixed",
};

const linkStyle = {
  padding: "10px",
  display: "inline-block",
};

export default Nav;
