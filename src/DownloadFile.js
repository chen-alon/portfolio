import React from "react";
import "./Resume.css";
import CV from "./CV_Chen_Alon.pdf";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

class DownloadFile extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

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
        <IconButton
          aria-label="download"
          size="small"
          onClick={this.downloadEmployeeData}
        >
          Download Chen Alon's Resume
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>
      </div>
    );
  }
}

export default DownloadFile;
