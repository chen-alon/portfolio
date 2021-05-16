import React from "react";
import logo from "./newProfile.jpeg";
import "./Home.css";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import PublicIcon from "@material-ui/icons/Public";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <div className="details group">
          <img src={logo} className="App-logo" alt="logo" />

          <div className="basic-details">
            <text>
              <IconButton aria-label="country" size="small" disabled="false">
                <PublicIcon fontSize="inherit" />
              </IconButton>{" "}
              Israel |
              <IconButton aria-label="phone" size="small" disabled="false">
                <PhoneIcon fontSize="inherit" />
              </IconButton>{" "}
              052‎-‎‏602‏‎-‎‏0358‏‎ |
              <IconButton aria-label="mail" size="small" disabled="false">
                <MailOutlineIcon fontSize="inherit" />
              </IconButton>{" "}
              chenalon259@gmail.com |
              <IconButton aria-label="linkedin" size="small" disabled="false">
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
                Looking for a full-time job as a Front-End‏ ‏developer in Gush
                Dan
              </strong>
            </text>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
