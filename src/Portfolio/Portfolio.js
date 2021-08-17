import React from "react";
import Title from "../components/Title";
import Card from "./Card";
import data from "./Data";
import { isMobile } from "react-device-detect";
import "../style/Portfolio.css";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: data.works,
      property: data.works[0],
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.works[newIndex],
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.works[newIndex],
    });
  };

  render() {
    const { property } = this.state;
    return (
      <div style={{ paddingTop: isMobile ? "70px" : "110px" }}>
        <div className="portfolio-title">
          <Title text="My Projects"></Title>
        </div>
        <label style={labelStyle}>{property.name} :</label>

        <div className="grid-container">
          <div className="grid-item" style={{ paddingTop: "10%" }}>
            <button
              onClick={() => this.prevProperty()}
              disabled={property.index === 0}
              style={buttonStyle}
            >
              <svg
                width={isMobile ? "30" : "50"}
                height={isMobile ? "30" : "50"}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg>
            </button>
          </div>
          <div className="grid-item" width="500px">
            <Card property={property} />
          </div>
          <div className="grid-item" style={{ paddingTop: "10%" }}>
            <button
              onClick={() => this.nextProperty()}
              disabled={property.index === data.works.length - 1}
              style={buttonStyle}
            >
              <svg
                width={isMobile ? "30" : "50"}
                height={isMobile ? "30" : "50"}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const card = {};

const buttonStyle = {
  margin: 10,
  borderColor: "transparent",
  backgroundColor: "transparent",
  padding: 15,
};

const labelStyle = {
  color: "#ea8034",
  fontSize: isMobile ? "calc(15px + 2vmin)" : "calc(20px + 2vmin)",
  fontWeight: "bold",
  paddingTop: isMobile ? "20px" : "0",
};

export default Portfolio;
