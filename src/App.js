import Quizo from "./components/quizo";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./scss/app.scss";
import { COLORS } from "./colors.js";
import music from "./assets/music.svg";
import science from "./assets/science.svg";
import soccer from "./assets/soccer.svg";
import nature from "./assets/nature.svg";
import Button from "@mui/material/Button";
import Questions from "./components/quiz-modal";
import Typography from "@mui/material/Typography";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./scss/card.scss";
import "./scss/questions.scss";
import { blue } from "@mui/material/colors";
import Modal from "react-modal";
import QuizModal from "./components/quiz-modal";
import { ScoreContext, ScoreProvider, useScore } from "./score-context";
import { cards } from "./components/cards";

let index_card;
export default function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {
    state: { score },
  } = useScore();
  function openModal(index) {
    index_card = index;
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  console.log(typeof index_card);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <div className="score-placement">
              <Quizo />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="score-placement">
              <span className="title" style={{ marginLeft: "1em" }}>
                score:{" "}
              </span>
              <span className="score">{score}</span>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="icon">
              {" "}
              <img src={soccer}></img>
              <p className="title">sports</p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="icon">
              {" "}
              <img src={science}></img>
              <p className="title">science</p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="icon">
              {" "}
              <img src={nature}></img>
              <p className="title">nature</p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="icon">
              <img src={music}></img>
              <p className="title">music</p>
            </div>
          </Grid>
          {cards.map((card, index) => (
            <Grid item xs={3}>
              <div
                style={{
                  background: card.color,
                  textAlign: "center",

                  verticalAlign: "middle",
                  color: COLORS.white,
                }}
                className="card"
                onClick={() => openModal(index)}
              >
                <span style={{ background: card.color }}>{card.points}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <QuizModal index={index_card} />
      </Modal>
    </div>
  );
}
