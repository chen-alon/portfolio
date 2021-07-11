import React from "react";
import Title from "./Title";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";
import emailjs from "emailjs-com";
import { isMobile } from "react-device-detect";
import "../style/Contact.css";

export default function Contact() {
  const classes = style();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b11fb8b",
        "template_a4l7lcf",
        e.target,
        "user_lZP8vFiZB0Rmr7NgN5j7g"
      )
      .then(
        function (response) {
          window.location.reload();
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <div
      style={{
        paddingTop: isMobile ? "110px" : "150px",
      }}
    >
      <div className="contact-title">
        <Title text="Contact Me"></Title>
      </div>
      <div className="boxes">
        <Grid container justify="center">
          <form className={classes.root} onSubmit={sendEmail}>
            <div style={{ display: "inline" }}>
              <label
                style={{
                  textAlign: "left",
                  display: "block",
                }}
              >
                Email{" "}
              </label>
              <InputField
                label="Your email.."
                variant="outlined"
                margin="dense"
                required
                fullWidth={true}
                type="email"
                name="email"
                InputLabelProps={{ required: false, className: classes.input }}
              />
            </div>

            <label
              style={{
                textAlign: "left",
                display: "block",
              }}
            >
              Name
            </label>
            <InputField
              label="Your name.."
              variant="outlined"
              margin="dense"
              required
              fullWidth={true}
              className={classes.field}
              name="name"
              InputLabelProps={{ required: false, className: classes.input }}
            />

            <label style={{ textAlign: "left", display: "block" }}>
              Message
            </label>
            <InputField
              label="Your message.."
              variant="outlined"
              margin="dense"
              required
              fullWidth={true}
              multiline
              rows={6}
              name="message"
              InputLabelProps={{ required: false, className: classes.input }}
            />

            <button className={classes.button} type="submit">
              SEND
            </button>
          </form>
        </Grid>
      </div>
    </div>
  );
}

const style = makeStyles(() => ({
  input: {
    color: "rgb(94, 89, 95)",
    fontFamily: ["Californian FB", "Rockwell", "sans-serif"],
  },
  field: {
    paddingBottom: "1rem",
    fontSize: "4px",
  },
  button: {
    marginTop: "1rem",
    color: "rgb(94, 89, 95)",
    backgroundColor: "transparent",
    border: "0",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      fontFamily: ["Californian FB", "Rockwell", "sans-serif"],
      color: "#999",
      display: "none",
    },
    "& label": {
      fontFamily: ["Californian FB", "Rockwell", "sans-serif"],
      color: "rgb(94, 89, 95)",
      display: "none",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        fontFamily: ["Californian FB", "Rockwell", "sans-serif"],
        borderColor: "#b6d9dd",
      },
      "&:hover fieldset": {
        fontFamily: ["Californian FB", "Rockwell", "sans-serif"],
        color: "#999",
      },
    },
  },
})(TextField);
