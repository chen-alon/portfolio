import React from "react";
import PropTypes from "prop-types";
import NoPicture from "../files/No_picture_available.png";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { isMobile } from "react-device-detect";
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
      <div>
        <aside style={{ width: "35%" }}>
          <img
            src={picture ? picture : NoPicture}
            alt={name}
            style={{
              width: isMobile ? "100px" : "200px",
              float: "left",
            }}
          />
        </aside>
        <div
          style={{
            width: isMobile ? "100%" : "65%",
            float: isMobile ? "right" : "left",
            paddingTop: "10px",
            paddingLeft: isMobile ? "0" : "20px",
            lineHeight: "180%",
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          paddingTop: "30px",
          paddingBottom: isMobile ? "30px" : "0",
          display: "inline",
        }}
      >
        <strong>Client side: </strong> {frontend}
        <br />
        <strong>Server side: </strong> {backend}
      </div>

      <div
        className="links"
        style={{
          textAlign: "center",
          paddingTop: isMobile ? "10px" : "0",
        }}
      >
        <a href={git} target="_blank" rel="noreferrer" style={linkStyle}>
          <IconButton aria-label="github" size="medium" disabled>
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          GitHub
        </a>

        {link ? (
          <a href={link} target="_blank" rel="noreferrer" style={linkStyle}>
            <IconButton aria-label="github" size="medium" disabled>
              <PlayCircleOutlineIcon fontSize="inherit" />
            </IconButton>
            DEMO
          </a>
        ) : null}

        {isMobile ? (
          <a href={message} target="_blank" rel="noreferrer" style={linkStyle}>
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

const linkStyle = {
  display: isMobile ? "block" : "inline",
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Card;
