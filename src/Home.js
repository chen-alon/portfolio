import React from "react";
import logo from "./newProfile.jpeg";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import PublicIcon from "@material-ui/icons/Public";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <div className="details">
          <div className="basic-details">
            <IconButton aria-label="country" size="small" disabled={false}>
              <PublicIcon fontSize="inherit" />
            </IconButton>{" "}
            Israel |
            <IconButton aria-label="phone" size="small" disabled={false}>
              <PhoneIcon fontSize="inherit" />
            </IconButton>{" "}
            052‎-‎‏602‏‎-‎‏0358‏‎ |
            <IconButton aria-label="mail" size="small" disabled={false}>
              <MailOutlineIcon fontSize="inherit" />
            </IconButton>{" "}
            chenalon259@gmail.com |
            <IconButton aria-label="github" size="small" disabled={false}>
              <GitHubIcon fontSize="inherit" />
            </IconButton>{" "}
            <a
              href="https://github.com/chen-alon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |
            <IconButton aria-label="linkedin" size="small" disabled={false}>
              <LinkedInIcon fontSize="inherit" />
            </IconButton>{" "}
            <a
              href="https://www.linkedin.com/in/chen-alon/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <strong>
              Looking for a full-time job as a Front-End‏ ‏developer in Gush Dan
            </strong>
          </div>
          <img
            src={logo}
            className="image"
            alt="logo"
            width="200"
            height="200"
          />
        </div>

        <div className="summary">
          <p>
            <span>HEY there!</span>
            <span>
              My name is Chen Alon, I'm 27 years old. I’m a fresh graduated that
              looking for my first challenge.
            </span>
            <span>
              I’m eager to learn new things ‎with fast and self-learning
              ability, very committed and have great social skills. ‎
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
