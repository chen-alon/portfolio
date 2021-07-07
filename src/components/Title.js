import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import "../style/Title.css";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  _onMouseMove = (e) => {
    const width = this.refs.titleContainer.clientWidth;
    const height = this.refs.titleContainer.clientHeight;
    const oX = (e.nativeEvent.offsetX / width) * 100;
    const oY = (e.nativeEvent.offsetY / height) * 100;
    this.setState({
      x: oX,
      y: oY,
    });
  };

  _onMouseOut = () => {
    this.setState({
      x: 0,
      y: 0,
    });
  };

  render() {
    const { text } = this.props;
    const { x, y } = this.state;
    const maskStyle = {
      "--maskX": x,
      "--maskY": y,
    };
    return (
      <div
        className="titleContainer"
        onMouseMove={this._onMouseMove}
        onMouseOut={this._onMouseOut}
        ref="titleContainer"
        style={maskStyle}
      >
        <div className="titleWrapper">
          <h1
            style={{
              fontSize: isMobile ? "calc(30px + 2vmin)" : "calc(60px + 2vmin)",
            }}
          >
            {text}
          </h1>
        </div>
        <div className="titleWrapper cloneWrapper">
          <h1
            style={{
              fontSize: isMobile ? "calc(30px + 2vmin)" : "calc(60px + 2vmin)",
            }}
          >
            {text}
          </h1>
        </div>
      </div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
