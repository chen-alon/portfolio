import React from "react";
import "./Download.css";
import CV from "./CV_Chen_Alon.pdf";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

class DownloadFile extends React.Component {
  constructor(props) {
    super(props);
  }

  downloadEmployeeData = () => {
    fetch(CV).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "CV_Chen_Alon";
        a.click();
      });
    });
  };

  render() {
    return (
      <div className="Download">
        <button onClick={this.downloadEmployeeData}>
          <IconButton aria-label="download" size="small">
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
          Download Chen Alon's Resume
        </button>
      </div>
    );
  }
}

export default DownloadFile;
