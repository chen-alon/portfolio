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
      <div className="hoverDownload" onClick={this.downloadEmployeeData}>
        <span className="hide">Download </span>
        <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
      </div>
    );
  }
}

export default DownloadFile;
