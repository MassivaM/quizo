import "../scss/app.scss";
import "../scss/result.scss";
import { COLORS } from "../colors.js";
function Correct() {
  return (
    <div className="result2">
      <span style={{ color: COLORS.green, background: "none" }}>CORRECT!</span>
    </div>
  );
}

export default Correct;
