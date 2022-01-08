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
import tech from "./assets/tech.svg";
import "./scss/card.scss";
//array of cards storing their color and number of points
let cards = [
  { color: COLORS.yellow, points: 1 },
  { color: COLORS.red, points: 1 },
  { color: COLORS.blue, points: 1 },
  { color: COLORS.purple, points: 1 },
  { color: COLORS.yellow, points: 1 },
  { color: COLORS.red, points: 1 },
  { color: COLORS.blue, points: 1 },
  { color: COLORS.purple, points: 1 },
  { color: COLORS.yellow, points: 2 },
  { color: COLORS.red, points: 2 },
  { color: COLORS.blue, points: 2 },
  { color: COLORS.purple, points: 2 },
  { color: COLORS.yellow, points: 4 },
  { color: COLORS.red, points: 4 },
  { color: COLORS.blue, points: 4 },
  { color: COLORS.purple, points: 4 },
];

export default function App() {
  return (
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
            <span className="score"> 0 </span>
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
            <img src={tech}></img>
            <p className="title">tech</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="icon">
            <img src={music}></img>
            <p className="title">music</p>
          </div>
        </Grid>
        {cards.map((card) => (
          <Grid item xs={3}>
            <div className="card-placement">
              <div
                style={{
                  background: card.color,
                  textAlign: "center",

                  verticalAlign: "middle",
                  color: COLORS.white,
                }}
                className="card"
              >
                <span style={{ background: card.color }}>{card.points}</span>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
