import "../scss/app.scss";
import "../scss/result.scss";
import { COLORS } from "../colors.js";
function Incorrect() {
  return (
    <div className="result">
      <span style={{ color: COLORS.red2, background: "none" }}>
        INCORRECT:(
      </span>
    </div>
  );
}

export default Incorrect;
