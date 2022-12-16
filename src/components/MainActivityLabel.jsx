import React from "react";
import redDot from "../assets/red-dot.png";
import blackDot from "../assets/black-dot.png";


const MainActivityLabel = () => {
  return (
    <div className="main-activity-label-container">
        <h3>Activité quotidienne</h3>
        <div>
            <p> <img src={redDot} alt="red dot"/> Poids (kg)</p>
            <p> <img src={blackDot} alt="black dot" /> Calories brûlées (kCal)</p>
        </div>
    </div>
  );
};

export default MainActivityLabel;