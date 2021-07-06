import React from "react";
import Title from "./Title";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";
import emailjs from "emailjs-com";
import "../style/Contact.css";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "rgb(94, 89, 95)",
    fontFamily: "Californian FB",
  },
  button: {
    marginTop: "1rem",
    color: "rgb(94, 89, 95)",
    backgroundColor: "transparent",
    border: "0",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#999",
    },
    "& label": {
      fontFamily: "Californian FB",
      color: "rgb(94, 89, 95)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#b6d9dd",
      },
      "&:hover fieldset": {
        borderColor: "rgb(240, 236, 236)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#b6d9dd",
      },
      "&.Mui-required	": {},
    },
  },
})(TextField);

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
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

export default function Contact(props) {
  const classes = useStyles();

  return (
    <div className="Contact">
      <div className="contact-title">
        <Title text="Contact Me"></Title>
      </div>
      <div className="boxes">
        <Grid container justify="center">
          <form className={classes.root} onSubmit={sendEmail}>
            <InputField
              label="your email"
              variant="outlined"
              required
              fullWidth={true}
              className={classes.field}
              type="email"
              InputLabelProps={{ required: false, className: classes.input }}
            />
            <InputField
              label="your name"
              variant="outlined"
              required
              fullWidth={true}
              className={classes.field}
              InputLabelProps={{ required: false, className: classes.input }}
            />
            <InputField
              label="your message..."
              variant="outlined"
              required
              fullWidth={true}
              multiline
              rows={4}
              className={classes.field}
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
