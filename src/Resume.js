import React from "react";
import "./Resume.css";
import DownloadFile from "./DownloadFile";
import IconButton from "@material-ui/core/IconButton";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PersonIcon from "@material-ui/icons/Person";
import LanguageIcon from "@material-ui/icons/Language";
import StorageIcon from "@material-ui/icons/Storage";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Resume">
        <DownloadFile />

        <div className="cv">
          <div className="‎education‏">
            <h2>
              <IconButton
                aria-label="‎education‏"
                size="small"
                disabled={false}
              >
                <SchoolIcon fontSize="inherit" />
              </IconButton>{" "}
              Education
            </h2>
            <p>
              Software Engineering B.Sc. degree‎, Azrieli College of Engineering
              (JCE)‎
              <span className="time">2016-2020‎</span>‎<br />
              <strong>GPA: 86‎</strong>
            </p>
          </div>

          <div className="projects‏">
            <h2>
              <IconButton
                aria-label="‎education‏"
                size="small"
                disabled={false}
              >
                <StorageIcon fontSize="inherit" />
              </IconButton>{" "}
              Projects‏‏
            </h2>
            <div className="projects-details">
              <a
                href="https://github.com/chen-alon/partners"
                target="_blank"
                rel="noreferrer"
              >
                Hitchhiker
              </a>{" "}
              - Android application‏ ‏developed with React-Native for final
              project ‎
              <ul>
                <li>
                  An application for finding travel partners in Israel and
                  abroad. The application matches travelers based ‎on a count
                  matching points algorithm ‎according to the traveler’s
                  requirements.
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
              >
                Susan’s House
              </a>{" "}
              - IOS and Android application developed with React-Native for real
              customer - Susan’s House organization ‎
              <ul>
                <li>
                  ‎An application for manage employees’ presence control
                  enforced by location-based authentication ‎using Google Maps
                  API.‎
                </li>
                <li>
                  Project manager and communicator with the client – understand
                  client requirement, roadmap ‎planning and tasks division
                  between the group members.
                </li>
              </ul>
              <p>
                <a
                  href="https://chen-alon-tic-tac-toe.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tic-Tac-Toe game
                </a>{" "}
                – Development of a Tic-Tac-Toe game with ReactJS
              </p>
            </div>
          </div>

          <div className="professional-skills‏">
            <h2>
              <IconButton
                aria-label="‎education‏"
                size="small"
                disabled={false}
              >
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
              <IconButton aria-label="work" size="small" disabled={false}>
                <WorkIcon fontSize="inherit" />
              </IconButton>{" "}
              ‎Work Experience‏
            </h2>
            <p>
              <strong>
                SOC analyst, Tata Consultancy Services, Bank Yahav
              </strong>
              <span className="time">‎2020-Present</span> <br />
              Monitor‎ and ‎respond to security threats‎ ‎on the system and
              investigate malicious activities.‎ <br />
              Working with ArcSight, Siemplify and Splunk Enterprise Security
              systems.‎
            </p>

            <p>
              <strong>Sigint Cyber Unit, Israel Police</strong>
              <span className="time">2018-2020‎</span>
            </p>
            <p>
              <strong>
                Border Controller, Population and Immigration Authority
              </strong>
              ‎<span className="time">2016-‎‎2017</span>
            </p>
          </div>

          <div className="military-service">
            <h2>
              <IconButton
                aria-label="‎education‏"
                size="small"
                disabled={false}
              >
                <PersonIcon fontSize="inherit" />
              </IconButton>{" "}
              Military Service‏
            </h2>
            <p>
              Served at the Israeli Air Force as a heavy transport aircraft
              technician <span className="time">‎2012-2014‎</span>
            </p>
          </div>

          <div className="languages">
            <h2>
              <IconButton
                aria-label="‎education‏"
                size="small"
                disabled={false}
              >
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
