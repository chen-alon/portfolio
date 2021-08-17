import React from "react";
import Title from "./Title";
import DownloadFile from "./DownloadFile";
import PortraitIcon from "@material-ui/icons/Portrait";
import IconButton from "@material-ui/core/IconButton";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PersonIcon from "@material-ui/icons/Person";
import LanguageIcon from "@material-ui/icons/Language";
import StorageIcon from "@material-ui/icons/Storage";
import { Grid } from "semantic-ui-react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import "../style/Resume.css";

class Resume extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: isMobile ? "70px" : "110px" }}>
        <div className="resume-title">
          <Title text="Resume"></Title>
        </div>

        <div className="cv">
          <div style={{ textAlign: "right" }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={"buttonDowload"}
            >
              <DownloadFile />
            </motion.button>
          </div>
          <div>
            <Grid>
              <Summary />
              <Education />
              <Project />
              <Skills />
              <Experience />
              <Military />
              <Languages />
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

const Summary = () => (
  <div className="summary">
    <h2>
      <IconButton size="small" disabled>
        <PortraitIcon fontSize="inherit" />
      </IconButton>{" "}
      Summary
    </h2>
    <div>
      <ul style={{ fontWeight: "bold" }}>
        <li>
          Motivated software engineer with a passion for web and mobile
          application development.‎
        </li>
        <li>
          Knowledge of JavaScript, Java, and frameworks with a focus on React
          and React Native.
        </li>
        <li>
          ‎I'm seeking a position to use my skills in coding and troubleshooting
          complex problems with fast and self-‎learning abilities and strong
          communication skills.‎
        </li>
      </ul>
    </div>
  </div>
);

const Education = () => (
  <div className="‎education‏">
    <h2>
      <IconButton size="small" disabled>
        <SchoolIcon fontSize="inherit" />
      </IconButton>{" "}
      Education
    </h2>
    <p>
      Software Engineering B.Sc. degree‎, Azrieli College of Engineering (JCE)‎
      <span style={timeStyle}>2016-2020‎</span>
    </p>
  </div>
);

const Project = () => (
  <div className="projects‏">
    <h2>
      <IconButton size="small" disabled>
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
      - Android application‏ ‏developed with <strong>React-Native</strong> for
      final project ‎
      <ul>
        <li>
          An application for finding travel partners in Israel and abroad. The
          application matches travelers based ‎on{" "}
          <strong>a count matching points algorithm</strong> ‎according to the
          traveler’s requirements.
        </li>
        <li>
          Using Firebase as the application server-side – users’ authentication,
          database and storage.‎
        </li>
        <li>
          End to end development process – sketches, design and implementation.‎
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
          ‎An application for manage employees’ presence control enforced by{" "}
          <strong>location-based authentication</strong> ‎using Google Maps
          API.‎
        </li>
        <li>
          Project manager and communicator with the client – understand client
          requirement, roadmap ‎planning and tasks division between the group
          members.
        </li>
      </ul>
    </div>
  </div>
);

const Skills = () => (
  <div className="professional-skills‏">
    <h2>
      <IconButton size="small" disabled>
        <ThumbUpIcon fontSize="inherit" />
      </IconButton>{" "}
      Professional Skills‏
    </h2>
    <ul className="list">
      <li>
        <strong> Programming and tools: </strong>JavaScript (ES‏6‏‎+), Java,
        C/C++, SQL, CSS3, HTML5‎, GitHub
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
);

const Experience = () => (
  <div className="work-experience">
    <h2>
      <IconButton size="small" disabled>
        <WorkIcon fontSize="inherit" />
      </IconButton>{" "}
      ‎Work Experience‏
    </h2>
    <p>
      <strong>SOC analyst, Tata Consultancy Services, Bank Yahav</strong>
      <span style={timeStyle}>‎2020-Present</span> <br />
      Monitor‎ and ‎respond to security threats‎ ‎on the system and investigate
      malicious activities.‎ <br />
      Working with ArcSight, Siemplify and Splunk Enterprise Security systems.‎
    </p>

    <p>
      <strong>Sigint Cyber Unit, Israel Police</strong>
      <span style={timeStyle}>2018-2020‎</span>
    </p>
    <p>
      <strong>Border Controller, Population and Immigration Authority</strong>‎
      <span style={timeStyle}>2016-‎‎2017</span>
    </p>
  </div>
);

const Military = () => (
  <div className="military-service">
    <h2>
      <IconButton size="small" disabled>
        <PersonIcon fontSize="inherit" />
      </IconButton>{" "}
      Military Service‏
    </h2>
    <p>
      Served at the Israeli Air Force as a heavy transport aircraft technician{" "}
      <span style={timeStyle}>‎2012-2014‎</span>
    </p>
  </div>
);

const Languages = () => (
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
);

const aStyle = {
  fontSize: isMobile ? "0.9375rem" : "1.1875rem",
  color: "#f32f72",
};

const timeStyle = {
  float: "right",
  fontSize: isMobile ? "0.75rem" : "1rem",
};

export default Resume;
