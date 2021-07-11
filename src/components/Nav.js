import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "../style/App.css";

function Nav() {
  return (
    <nav>
      <ul style={ulStyle}>
        <Link to="/" style={linkStyle} className="home">
          <li style={listStyle}>Home</li>
        </Link>
        <Link to="/resume" style={linkStyle} className="resume">
          <li style={listStyle}>Resume</li>
        </Link>
        <Link to="/portfolio" style={linkStyle} className="portfolio">
          <li style={listStyle}>Portfolio</li>
        </Link>
        <Link to="/contact" style={linkStyle} className="contact">
          <li style={listStyle}>Contant</li>
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
  padding: isMobile ? "4px" : "10px",
  display: "inline-block",
};

const listStyle = {
  fontSize: "9px",
  padding: "10px",
  color: "#999",
  display: "inline-block",
};

export default Nav;
