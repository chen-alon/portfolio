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
      <div style={{ paddingTop: isMobile ? "110px" : "150px" }}>
        <div className="portfolio-title">
          <Title text="My Projects"></Title>
        </div>
        <div style={{ textAlign: "center", paddingTop: "65px" }}>
          <button
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
            style={{
              margin: 10,
              borderColor: "#fff",
              backgroundColor: "rgb(240, 236, 236)",
              padding: 15,
            }}
          >
            prev
          </button>
          <button
            onClick={() => this.nextProperty()}
            disabled={property.index === data.works.length - 1}
            style={{
              margin: 10,
              borderColor: "#fff",
              backgroundColor: "rgb(240, 236, 236)",
              padding: 15,
            }}
          >
            next
          </button>
        </div>

        <label
          style={{
            color: "#fbd074",
            fontSize: isMobile ? "calc(15px + 2vmin)" : "calc(20px + 2vmin)",
            fontWeight: "bold",
            paddingTop: isMobile ? "20px" : "0",
          }}
        >
          {property.name} :
        </label>
        <Card property={property} />
      </div>
    );
  }
}

export default Portfolio;
