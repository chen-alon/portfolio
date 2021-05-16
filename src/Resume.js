import React from "react";
import "./Resume.css";
import DownloadFile from "./DownloadFile";
import IconButton from "@material-ui/core/IconButton";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PersonIcon from "@material-ui/icons/Person";
import LanguageIcon from "@material-ui/icons/Language";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Resume">
        <div className="cv">
          <DownloadFile />

          <div className="work-experience">
            <dl>
              <h2>
                <IconButton aria-label="work" size="small">
                  <WorkIcon fontSize="inherit" />
                </IconButton>{" "}
                ‎Work Experience‏
              </h2>
              <dt>
                <p>
                  <strong>
                    SOC analyst, <em>Tata Consultancy Services, Bank Yahav</em>
                  </strong>{" "}
                  <span class="time">Current occupation</span>
                </p>
              </dt>
              <dd>
                Monitor‎ and ‎respond to security threats‎ ‎on the system and
                investigate malicious activities.‎ <br />
                Working with ArcSight, Siemplify and Splunk Enterprise Security
                systems.‎
              </dd>
              <dt>
                <p>
                  <strong>
                    Sigint Cyber Unit, <em>Israel Police</em>
                  </strong>
                  <span class="time">2018-2020‎</span>
                </p>
              </dt>
              <dd>
                Classified role that cannot be further explained. Security
                clearance available.‎
              </dd>
              <dt>
                <p>
                  <strong>
                    Border Controller,{" "}
                    <em>Population and Immigration Authority</em>{" "}
                  </strong>
                  ‎<span class="time">2016-‎‎2017</span>
                </p>
              </dt>
              <dd>
                Responsible for passport inspection and passenger
                identification.‎
              </dd>
            </dl>
          </div>

          <div className="‎education‏">
            <h2>
              <IconButton aria-label="‎education‏" size="small">
                <SchoolIcon fontSize="inherit" />
              </IconButton>{" "}
              Education
            </h2>
            <p>
              Software Engineering B.Sc. degree‎, Azrieli College of Engineering
              (JCE)‎
              <span class="time">2016-2020‎</span>‎<br />
              <strong>GPA: 86‎</strong>
            </p>
          </div>

          <div className="professional-skills‏">
            <h2>
              <IconButton aria-label="‎education‏" size="small">
                <ThumbUpIcon fontSize="inherit" />
              </IconButton>{" "}
              Professional Skills‏
            </h2>
            <ul className="list">
              <li>
                <strong>Programming: </strong>JavaScript (ES‏6‏‎+), Java, C/C++,
                SQL, CSS3, HTML5‎
              </li>
              <li>
                <strong>Libraries: </strong>ReactJS, React-Native
              </li>
              <li>
                <strong>Environments: </strong>VS Code, Eclipse, Android Studio,
                GitHub ‎
              </li>
              <li>
                <strong>OS: </strong>Windows, Unix-Linux
              </li>
              <li>
                <strong>Database‎: </strong>Firebase
              </li>
              <li>
                <strong>Projects as part of studies: </strong>
                <div className="projects">
                  <p>
                    <a
                      href="https://github.com/chen-alon/partners"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hitchhiker
                    </a>{" "}
                    - Application‏ ‏developed with React-Native for final
                    project‎
                    <br />
                    ‎Development of an Android application ‎that will provide a
                    solution for travelers ‎looking for travel ‎‎partners in
                    Israel and abroad. An application which is based on matching
                    percentages ‎according to ‎traveler’s requirements. ‎
                    <br />
                    ‎Developed the application on my own - end to end
                    development process – from planning to ‎execution.‎
                  </p>
                  <p>
                    <a
                      href="https://github.com/chen-alon/partners"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Susan’s House
                    </a>{" "}
                    - Application developed with React-Native for Susan’s House
                    organization ‎<br />
                    Development of an Android and IOS application to manage
                    employees presence control, location-‎based authentication.‎
                    <br />
                    ‎‎In addition, I was the project manager and communicated
                    with the client.‎
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="military-service">
            <h2>
              <IconButton aria-label="‎education‏" size="small">
                <PersonIcon fontSize="inherit" />
              </IconButton>{" "}
              Military Service‏
            </h2>
            <p>
              Served at the Israeli Air Force as a heavy transport aircraft
              technician <span class="time">‎2012-2014‎</span>
            </p>
          </div>

          <div className="languages">
            <h2>
              <IconButton aria-label="‎education‏" size="small">
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
