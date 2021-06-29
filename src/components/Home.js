import React from "react";
import logo from "../files/newProfile.jpeg";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import PublicIcon from "@material-ui/icons/Public";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../style/Home.css";

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
            <IconButton aria-label="country" size="small" disabled>
              <PublicIcon fontSize="inherit" />
            </IconButton>{" "}
            Israel |
            <IconButton aria-label="phone" size="small" disabled>
              <PhoneIcon fontSize="inherit" />
            </IconButton>{" "}
            052‎-‎‏602‏‎-‎‏0358‏‎ |
            <IconButton aria-label="mail" size="small" disabled>
              <MailOutlineIcon fontSize="inherit" />
            </IconButton>{" "}
            chenalon259@gmail.com |
            <IconButton aria-label="github" size="small" disabled>
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
            <IconButton aria-label="linkedin" size="small" disabled>
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
            {/* <strong>
              Looking for a full-time job as a Front-End‏ ‏developer in Gush Dan
            </strong> */}
          </div>

          <div className="summary">
            <p>
              HEY there!
              <br />
              My name is Chen Alon, I'm 27 years old and a Software Engineering
              graduate.
              <br />
              <br />
              Looking forward to earning the position of Software Engineer at a
              leading organization to showcase my skills in programming to
              generate high-end solutions to general software issues along with
              drawing better user experience.
              <br />
              <br />
              Injoy.
            </p>
          </div>
        </div>

        <aside className="side-image">
          <img src={logo} className="image" alt="logo" />
        </aside>
      </div>
    );
  }
}

export default Home;
