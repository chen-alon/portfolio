import React from "react";
import "../style/Portfolio.css";
import Card from "./Card";
import data from "./Data";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
      <div className="Portfolio">
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
          style={{ margin: 10 }}
        >
          <IconButton aria-label="prev" size="small" disabled>
            <ArrowBackIcon fontSize="inherit" />
          </IconButton>
        </button>
        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === data.works.length - 1}
          style={{ margin: 10 }}
        >
          <IconButton aria-label="next" size="small" disabled>
            <ArrowForwardIcon fontSize="inherit" />
          </IconButton>
        </button>
        <div>
          <Card property={property} />
        </div>
      </div>
    );
  }
}

export default Portfolio;
