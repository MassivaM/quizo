import "../scss/app.scss";
import {COLORS} from '../colors.js'
function Quizo() {
  return (
    <div>
      <h1 className="quizo">
        <span style={{ color: COLORS.yellow}}>Q</span>
        <span style={{ color: COLORS.red }}>u</span>
        <span style={{ color: COLORS.white }}>i</span>
        <span style={{ color: COLORS.blue }}>z</span>
        <span style={{ color: COLORS.purple }}>o</span>
      </h1>
    </div>
  );
}

export default Quizo;
