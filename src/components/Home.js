import React from "react";
import Title from "./Title";
import logo from "../files/favicon.png";
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
          paddingTop: isMobile ? "70px" : "110px",
          display: "inline-block",
        }}
      >
        <div className="home-title">
          <Title text="I am Chen Alon"></Title>
          <p>Software Engineer</p>
        </div>
        <div
          style={{
            color: "#7c968e",
          }}
        >
          <div className="basic-details" style={basicDetailsStyle}>
            <div className="hoverIcon" style={iconsStyle}>
              <a
                href="https://github.com/chen-alon"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <span className="hide">Github</span>
            </div>

            <div className="hoverIcon " style={iconsStyle}>
              <a
                href="https://www.linkedin.com/in/chen-alon/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <span className="hide">LinkedIn</span>
            </div>

            <div className="hoverIcon" style={iconsStyle}>
              <a
                href="mailto:chenalon259@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mailBox"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
              </a>
              <span className="hide">Sent me an email</span>
            </div>

            <div className="hoverIcon" style={iconsStyle}>
              <a href="tel:+972526020358" target="_blank" rel="noreferrer">
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </a>
              <span className="hide">Call me</span>
            </div>
          </div>
        </div>

        <div style={summaryStyle}>
          <div className="main-area">
            <img src={logo} style={imageStyle} alt="logo" className="image" />
          </div>

          <aside className="sidebar">
            <p>
              HEY there!
              <br /> <br />
              I'm Looking for a position of Software Engineer to showcase my
              skills in programming to generate high-end solutions to general
              software issues along with drawing better user experience.
            </p>
          </aside>
        </div>
      </div>
    );
  }
}

const iconsStyle = {
  margin: isMobile ? "40px" : "60px",
};

const basicDetailsStyle = {
  fontSize: isMobile ? "calc(6px + 2vmin)" : "calc(8px + 2vmin)",
  margin: isMobile ? "10px 10px 0 0" : "15px 15px 0 0",
  fontWeight: "bold",
  paddingTop: isMobile ? "10px" : "0",
  paddingBottom: isMobile ? "40px" : "",
  lineHeight: "180%",
};

const summaryStyle = {
  fontSize: isMobile ? "calc(6px + 2vmin)" : "calc(8px + 2vmin)",
  float: "left",
  lineHeight: "200%",
  backgroundColor: "#9BC0B6",
  padding: isMobile ? "30px" : "50px",
  border: "2px solid #999",
};

const imageStyle = {
  opacity: "80%",
  border: "2px solid #a9c9bf",
  padding: "3px",
  backgroundColor: "#dcddd99a",
  boxSizing: "border-box",
  width: "100%",
};

export default Home;
