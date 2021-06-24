import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "../style/Contact.css";
import Email from "./Email";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Download">
        <text>helloooooo</text>
        {/* <IconButton aria-label="email" size="small" onClick={Email}>
          Contact me via mail
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton> */}
      </div>
    );
  }
}

export default Contact;
