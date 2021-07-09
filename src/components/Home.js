import React from "react";
import Title from "./Title";
import logo from "../files/favicon.png";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import PublicIcon from "@material-ui/icons/Public";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { isMobile } from "react-device-detect";
import "../style/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          paddingTop: isMobile ? "110px" : "150px",
          display: "inline-block",
        }}
      >
        <div className="home-title">
          <Title text="I am Chen Alon"></Title>
          <p>Software Engineer</p>
        </div>
        <div
          style={{
            paddingTop: isMobile ? "45px" : "65px",
            color: "#7c968e",
          }}
        >
          <aside
            style={{ paddingRight: isMobile ? "10px" : "40px", float: "left" }}
          >
            <img src={logo} style={imageStyle} alt="logo" className="image" />
          </aside>

          <div className="basic-details" style={basicDetailsStyle}>
            <IconButton aria-label="country" size="small" disabled>
              <PublicIcon fontSize="inherit" />
            </IconButton>
            Israel
            <br />
            <IconButton aria-label="phone" size="small" disabled>
              <PhoneIcon fontSize="inherit" />
            </IconButton>
            <a href="tel:+972526020358" target="_blank" rel="noreferrer">
              052‎-‎‏602‏‎-‎‏0358‏‎
            </a>
            <br />
            <IconButton aria-label="mail" size="small" disabled>
              <MailOutlineIcon fontSize="inherit" />
            </IconButton>
            <a
              href="mailto:chenalon259@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              chenalon259@gmail.com
            </a>
            <br />
            <IconButton aria-label="github" size="small" disabled>
              <GitHubIcon fontSize="inherit" />
            </IconButton>
            <a
              href="https://github.com/chen-alon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <br />
            <IconButton aria-label="linkedin" size="small" disabled>
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
            <a
              href="https://www.linkedin.com/in/chen-alon/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div style={summaryStyle}>
          HEY there!
          <br />
          I'm Looking forward to earning the position of Software Engineer at a
          leading organization to showcase my skills in programming to generate
          high-end solutions to general software issues along with drawing
          better user experience.
        </div>
      </div>
    );
  }
}

const basicDetailsStyle = {
  fontSize: isMobile ? "calc(8px + 2vmin)" : "calc(8px + 2vmin)",
  margin: isMobile ? "5px 5px 0 0" : "15px 15px 0 0",
  display: isMobile ? "inline-block" : "",
  fontWeight: "bold",
  paddingTop: isMobile ? "10px" : "0",
  lineHeight: "180%",
};

const imageStyle = {
  opacity: "95%",
  border: "2px solid #a9c9bf",
  padding: "3px",
  backgroundColor: "#dcddd99a",
  boxSizing: "border - box",
  width: isMobile ? "130px" : "200px",
};

const summaryStyle = {
  fontSize: isMobile ? "calc(6px + 2vmin)" : "calc(8px + 2vmin)",
  width: isMobile ? "70%" : "50%",
  paddingTop: isMobile ? "40px" : "80px",
  float: "right",
  lineHeight: "200%",
};

export default Home;
