import React from "react";
import Title from "./Title";
import DownloadFile from "./DownloadFile";
import IconButton from "@material-ui/core/IconButton";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PersonIcon from "@material-ui/icons/Person";
import LanguageIcon from "@material-ui/icons/Language";
import StorageIcon from "@material-ui/icons/Storage";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import "../style/Resume.css";

const aStyle = {
  fontSize: isMobile ? "15px" : "19px",
  color: "#ceabb1",
};

const timeStyle = {
  float: "right",
  fontSize: isMobile ? "12px" : "16px",
};

class Resume extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: isMobile ? "110px" : "150px" }}>
        <div className="resume-title">
          <Title text="Resume"></Title>
        </div>
        <div className="cv" style={{ paddingTop: isMobile ? "45px" : "65px" }}>
          <div style={{ textAlign: "right" }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={"buttonDowload"}
            >
              <DownloadFile />
            </motion.button>
          </div>
          <div className="‎education‏">
            <h2>
              <IconButton aria-label="‎education‏" size="small" disabled>
                <SchoolIcon fontSize="inherit" />
              </IconButton>{" "}
              Education
            </h2>
            <p>
              Software Engineering B.Sc. degree‎, Azrieli College of Engineering
              (JCE)‎
              <span style={timeStyle}>2016-2020‎</span>‎<br />
            </p>
          </div>
          <div className="projects‏">
            <h2>
              <IconButton aria-label="‎education‏" size="small" disabled>
                <StorageIcon fontSize="inherit" />
              </IconButton>{" "}
              Projects‏‏
            </h2>
            <div>
              <a
                href="https://github.com/chen-alon/partners"
                target="_blank"
                rel="noreferrer"
                style={aStyle}
              >
                Hitchhiker
              </a>{" "}
              - Android application‏ ‏developed with{" "}
              <strong>React-Native</strong> for final project ‎
              <ul>
                <li>
                  An application for finding travel partners in Israel and
                  abroad. The application matches travelers based ‎on{" "}
                  <strong>a count matching points algorithm</strong> ‎according
                  to the traveler’s requirements.
                </li>
                <li>
                  Using Firebase as the application server-side – users’
                  authentication, database and storage.‎
                </li>
                <li>
                  End to end development process – sketches, design and
                  implementation.‎
                </li>
              </ul>
              <a
                href="https://github.com/chen-alon/SausanHouse"
                target="_blank"
                rel="noreferrer"
                style={aStyle}
              >
                Susan’s House
              </a>{" "}
              - IOS and Android application developed with React-Native for{" "}
              <strong>a real customer</strong> - Susan’s House organization ‎
              <ul>
                <li>
                  ‎An application for manage employees’ presence control
                  enforced by <strong>location-based authentication</strong>{" "}
                  ‎using Google Maps API.‎
                </li>
                <li>
                  Project manager and communicator with the client – understand
                  client requirement, roadmap ‎planning and tasks division
                  between the group members.
                </li>
              </ul>
              <p>
                <a
                  href="https://github.com/chen-alon/tic-tac-toe"
                  target="_blank"
                  rel="noreferrer"
                  style={aStyle}
                >
                  Tic-Tac-Toe game
                </a>{" "}
                – Development of a Tic-Tac-Toe game with{" "}
                <strong>ReactJS</strong>
                <br />
                &emsp; The game can be played in a production environment on{" "}
                <strong>Heroku platform</strong> –{" "}
                <a
                  href="https://chen-alon-tic-tac-toe.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={aStyle}
                >
                  play the game.‎
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/chen-alon/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  style={aStyle}
                >
                  My Portfolio
                </a>{" "}
                – created this portfolio website using React.js
              </p>
            </div>
          </div>
          <div className="professional-skills‏">
            <h2>
              <IconButton aria-label="‎education‏" size="small" disabled>
                <ThumbUpIcon fontSize="inherit" />
              </IconButton>{" "}
              Professional Skills‏
            </h2>
            <ul className="list">
              <li>
                <strong> Programming and tools: </strong>JavaScript (ES‏6‏‎+),
                Java, C/C++, SQL, CSS3, HTML5‎, GitHub
              </li>
              <li>
                <strong>Frameworks and libraries: </strong>ReactJS, React-Native
              </li>
              <li>
                <strong>OS: </strong>Windows, Unix-Linux
              </li>
              <li>
                <strong>Database‎: </strong>Firebase
              </li>
            </ul>
          </div>
          <div className="work-experience">
            <h2>
              <IconButton aria-label="work" size="small" disabled>
                <WorkIcon fontSize="inherit" />
              </IconButton>{" "}
              ‎Work Experience‏
            </h2>
            <p>
              <strong>
                SOC analyst, Tata Consultancy Services, Bank Yahav
              </strong>
              <span style={timeStyle}>‎2020-Present</span> <br />
              Monitor‎ and ‎respond to security threats‎ ‎on the system and
              investigate malicious activities.‎ <br />
              Working with ArcSight, Siemplify and Splunk Enterprise Security
              systems.‎
            </p>

            <p>
              <strong>Sigint Cyber Unit, Israel Police</strong>
              <span style={timeStyle}>2018-2020‎</span>
            </p>
            <p>
              <strong>
                Border Controller, Population and Immigration Authority
              </strong>
              ‎<span style={timeStyle}>2016-‎‎2017</span>
            </p>
          </div>
          <div className="military-service">
            <h2>
              <IconButton aria-label="‎education‏" size="small" disabled>
                <PersonIcon fontSize="inherit" />
              </IconButton>{" "}
              Military Service‏
            </h2>
            <p>
              Served at the Israeli Air Force as a heavy transport aircraft
              technician <span style={timeStyle}>‎2012-2014‎</span>
            </p>
          </div>
          <div className="languages">
            <h2>
              <IconButton aria-label="‎education‏" size="small" disabled>
                <LanguageIcon fontSize="inherit" />
              </IconButton>{" "}
              ‎Languages
            </h2>
            <p>
              <strong>Hebrew:</strong> Native, <strong>English:</strong> fluent‎
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
