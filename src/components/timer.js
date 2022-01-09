import * as React from "react";
import "../scss/timer.scss";
import { COLORS } from "../colors.js";
function Timer({ Wrong_Answer }) {
  const [countdown, setCountdown] = React.useState(60);
  React.useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(interval);
      Wrong_Answer();
    }
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="timer">
      <span style={{ color: COLORS.yellow, background: "none" }}>
        {countdown}
      </span>
    </div>
  );
}
export default Timer;
