import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/" style={{ padding: "10px", display: "inline-block" }}>
          <li>Home</li>
        </Link>
        <Link to="/resume" style={{ padding: "10px", display: "inline-block" }}>
          <li>Resume</li>
        </Link>
        <Link
          to="/portfolio"
          style={{ padding: "10px", display: "inline-block" }}
        >
          <li>Portfolio</li>
        </Link>
        <Link
          to="/contant"
          style={{ padding: "10px", display: "inline-block" }}
        >
          <li>Contant</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;