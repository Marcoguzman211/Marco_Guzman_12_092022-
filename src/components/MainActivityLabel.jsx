import React from "react";
import redDot from "../assets/red-dot.png";
import blackDot from "../assets/black-dot.png";

/**
 *
 * @returns {JSX.Element} Label for the Activity type rechart's chart.
 */
const MainActivityLabel = () => {
  return (
    <div className="main-activity-label-container">
      <h3>Activité quotidienne</h3>
      <div>
        <p>
          {" "}
          <img src={blackDot} alt="red dot" /> Poids (kg)
        </p>
        <p>
          {" "}
          <img src={redDot} alt="black dot" /> Calories brûlées (kCal)
        </p>
      </div>
    </div>
  );
};

export default MainActivityLabel;
