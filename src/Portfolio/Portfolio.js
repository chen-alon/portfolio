import React from "react";
import data from "./Data";
import { Image, Icon, Grid } from "semantic-ui-react";
import { isMobile } from "react-device-detect";
import "../style/Portfolio.css";

const works = (
  <Grid
    style={{
      width: "80%",
      position: "absolute",
    }}
    stackable
    className="grid"
  >
    {data.map((data) => (
      <Grid.Row className="card">
        <Grid.Column width={8}>
          <Image
            className="portfolio_image"
            alt={data.name}
            src={data.picture}
            centered
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <p style={{ fontSize: "18px" }}>
            <span style={{ fontWeight: "bold", fontSize: "25px" }}>
              {data.name}
            </span>
            <div className="project-info">
              {data.description}
              <br />
              <br />
              {data.frontend && (
                <>
                  <span style={{ fontWeight: "bold" }}>Client side:</span>
                  {data.frontend}
                  <br />
                </>
              )}
              {data.backend && (
                <>
                  <span style={{ fontWeight: "bold" }}>Server side:</span>
                  {data.backend}
                </>
              )}
              <br />
              <br />
            </div>
            {data.git && (
              <a href={data.git} target="_blank" rel="noreferrer">
                <Icon name="github" />
                GitHub <br />
              </a>
            )}

            {data.link && (
              <a href={data.link} target="_blank" rel="noreferrer">
                DEMO <br></br>
              </a>
            )}
            {isMobile ? (
              <a href={data.message} target="_blank" rel="noreferrer">
                Let's talk about this project
              </a>
            ) : null}
          </p>
        </Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
);

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="Portfolio">{works}</div>;
  }
}

export default Portfolio;
