import React from "react";
import CV from "../files/CV_Chen_Alon.pdf";
import "../style/Resume.css";

class DownloadFile extends React.Component {
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
      <div className="Download" onClick={this.downloadEmployeeData}>
        Download Chen Alon's Resume
      </div>
    );
  }
}

export default DownloadFile;
