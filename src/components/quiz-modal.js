import * as React from "react";
import "../scss/app.scss";
import "../scss/questions.scss";
import { COLORS } from "../colors.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { questions } from "./questions";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Incorrect from "./incorrect";
import Correct from "./correct";
import { ScoreContext, ScoreProvider, useScore } from "../score-context";
import { cards } from "./cards";
function Questions({ index, closeModal, modalIsOpen }) {
  const [visible_correct, setVisibilityCorrect] = React.useState(false);
  const [visible_incorrect, setVisibilityIncorrect] = React.useState(false);

  const { dispatch } = useScore();

  function Disable(index) {
    cards[index].points = 0;
    cards[index].disabled = "none";
  }
  function Good_Answer() {
    setVisibilityCorrect(true);
    setTimeout(() => {
      setVisibilityCorrect(false);
      Disable(index);
      closeModal();
    }, 1900);
    for (var i = 0; i < cards[index].points; i++) {
      dispatch({ type: "increment" });
    }
  }
  function Wrong_Answer() {
    setVisibilityIncorrect(true);
    setTimeout(() => {
      setVisibilityIncorrect(false);
      Disable(index);
      closeModal();
    }, 1900);
    for (var i = 0; i < cards[index].points; i++) {
      dispatch({ type: "decrement" });
    }
  }

  var a_value = questions[index].A;
  var b_value = questions[index].B;
  var c_value = questions[index].C;
  var answer = questions[index].correct;
  console.log(typeof answer);
  function press_A() {
    if (answer === "A") {
      Good_Answer();

      //upgrade score
      //disable that block
      //close modal
    } else {
      Wrong_Answer();

      //upgrade score
      //disable that block
      //close modal
    }
  }

  function press_B() {
    if (answer === "B") {
      Good_Answer();

      //upgrade score
      //disable that block
      //close modal
    } else {
      Wrong_Answer();

      //upgrade score
      //disable that block
      //close modal
    }
  }
  function press_C() {
    if (answer === "C") {
      Good_Answer();

      //upgrade score
      //disable that block
      //close modal
    } else {
      Wrong_Answer();
      //upgrade score
      //disable that block
      //close modal
    }
  }
  return (
    <div>
      {visible_correct && <Correct />}
      {visible_incorrect && <Incorrect />}
      <Box pt={0.5}>
        <span className="question">{questions[index].question}</span>
      </Box>
      <br></br>

      <div style={{ textAlign: "center" }}>
        <Box pt={0.5}>
          <button className="button" onClick={press_A}>
            <span
              style={{
                fontWeight: "bold",
                paddingRight: "0.5em",
                background: "none",
              }}
            >
              A.
            </span>
            {a_value}
          </button>
        </Box>
        <br></br>
        <Box pt={0.5}>
          <button className="button" onClick={press_B}>
            <span
              style={{
                fontWeight: "bold",
                paddingRight: "0.5em",
                background: "none",
              }}
            >
              B.
            </span>
            {b_value}
          </button>
        </Box>
        <br></br>
        <Box pt={0.5}>
          <button className="button" onClick={press_C}>
            <span
              style={{
                fontWeight: "bold",
                paddingRight: "0.5em",
                background: "none",
              }}
            >
              C.
            </span>
            {c_value}
          </button>
        </Box>
      </div>
    </div>
  );
}

export default Questions;
