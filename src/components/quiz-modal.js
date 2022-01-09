import "../scss/app.scss";
import "../scss/questions.scss";
import { COLORS } from "../colors.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { questions } from "./questions";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Result from "./result";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});
const theme2 = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#C7B9FF",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});
function Questions({ index }) {
  var allo = index;
  console.log(index);
  var a_value = questions[index].A;
  var b_value = questions[index].B;
  var c_value = questions[index].C;
  var answer = questions[index].correct;
  console.log(typeof answer);
  function press_A() {
    if (answer === "A") {
      console.log("we enter the if");
      return <Result word="CORRECT!" />;

      //show Correct
      //upgrade score
      //disable that block
      //close modal
    } else {
      return <Result word="INCORRECT:(" />;

      //show inCorrect
      //upgrade score
      //disable that block
      //close modal
    }
  }

  return (
    <div>
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
              }}
            >
              A.
            </span>
            {a_value}
          </button>
        </Box>
        <br></br>
        <Box pt={0.5}>
          <button className="button">
            <span style={{ fontWeight: "bold", paddingRight: "0.5em" }}>
              B.
            </span>
            {b_value}
          </button>
        </Box>
        <br></br>
        <Box pt={0.5}>
          <button className="button">
            <span style={{ fontWeight: "bold", paddingRight: "0.5em" }}>
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
