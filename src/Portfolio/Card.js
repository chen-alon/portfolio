import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "../style/Portfolio.css";

const Card = ({ property }) => {
  const {
    index,
    name,
    picture,
    description,
    frontend,
    backend,
    git,
    link,
    message,
  } = property;
  return (
    <div id={`card-${index}`} className="card">
      <div
        className="Section"
        style={{
          boxSizing: "border-box",
          display: isMobile ? "inline-block" : "flex",
        }}
      >
        <aside style={{ width: "35%", float: "left" }}>
          <img
            src={picture}
            alt={name}
            style={{
              width: isMobile ? "100px" : "200px",
            }}
          />
        </aside>
        <div
          style={{
            width: isMobile ? "100%" : "65%",
            float: isMobile ? "right" : "left",
            paddingTop: isMobile ? "10px" : "0",
            lineHeight: "180%",
          }}
        >
          {description}
        </div>
      </div>
      <div className="Section">
        <strong>Client size: </strong> {frontend}
        <br />
        <strong>Server side: </strong> {backend}
      </div>
      <div className="links">
        <a href={git} target="_blank" rel="noreferrer">
          <IconButton aria-label="github" size="medium" disabled>
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          GitHub
        </a>

        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <IconButton aria-label="github" size="medium" disabled>
              <PlayCircleOutlineIcon fontSize="inherit" />
            </IconButton>
            DEMO
          </a>
        ) : null}

        {isMobile ? (
          <a href={message} target="_blank" rel="noreferrer">
            <IconButton aria-label="github" size="medium" disabled>
              <WhatsAppIcon fontSize="inherit" />
            </IconButton>
            Let's talk about this project
          </a>
        ) : null}
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Card;
