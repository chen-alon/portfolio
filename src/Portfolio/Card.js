import React from "react";
import PropTypes from "prop-types";
import NoPicture from "../files/No_picture_available.png";
import { isMobile } from "react-device-detect";
import "../style/Portfolio.css";

const Card = ({ property }) => {
  const { index, picture, description, frontend, backend, git, link, message } =
    property;
  return (
    <div
      id={`card-${index}`}
      className="card"
      style={{ width: isMobile ? "10rem" : "40rem" }}
    >
      <div>
        <aside style={{ width: "35%" }}>
          <img
            src={picture ? picture : NoPicture}
            style={{
              width: isMobile ? "100px" : "200px",
              float: "left",
            }}
          />
        </aside>
        <div
          style={{
            width: isMobile ? "100%" : "65%",
            float: isMobile ? "right" : "left",
            paddingTop: "10px",
            lineHeight: "180%",
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          paddingTop: "30px",
          paddingBottom: "20px",
          display: "inline",
        }}
      >
        <strong>Client side: </strong> {frontend}
        <br />
        <strong>Server side: </strong> {backend}
      </div>

      <div className="links" style={{ textAlign: "center" }}>
        <a href={git} target="_blank" rel="noreferrer">
          <svg
            width={isMobile ? "30" : "50"}
            height={isMobile ? "30" : "50"}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

        {isMobile ? (
          <a href={message} target="_blank" rel="noreferrer">
            <svg
              width={isMobile ? "30" : "50"}
              height={isMobile ? "30" : "50"}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
        ) : null}

        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <svg
              width={isMobile ? "30" : "50"}
              height={isMobile ? "30" : "50"}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
            </svg>
          </a>
        ) : null}
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Card;
