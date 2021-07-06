import React from "react";
import "../style/Portfolio.css";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

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
    <div>
      <div id={`card-${index}`} className="card">
        <div className="details">
          <p>
            <aside className="side-image">
              <img src={picture} alt={name} />
            </aside>
            <div>
              {description}
              <br />
              <br />
              <strong>Client size: </strong> {frontend}
              <br />
              <strong>Server side: </strong> {backend}
            </div>
          </p>
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
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Card;
