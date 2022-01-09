import "../scss/app.scss";
import { COLORS } from "../colors.js";
function Result({ word }) {
  var color;
  if (word == "CORRECT!") {
    color = COLORS.green;
  } else {
    color = COLORS.red2;
  }
  return (
    <div>
      <h1 className="result" style={{ color: { color } }}>
        {word}
      </h1>
    </div>
  );
}

export default Result;
