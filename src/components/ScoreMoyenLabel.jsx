import React from "react";
import { PropTypes } from "prop-types";

const ScoreMoyenLabel = ({ score }) => {
  return (
    <div>
      <div className="scoremoyen-result">
        <div className="scoremoyen-result-number">{score * 100}%</div>
        <div className="scoremoyen-result-text">de votre</div>
        <div className="scoremoyen-result-text">objectif</div>
      </div>
    </div>
  );
};

ScoreMoyenLabel.propTypes = {
  score: PropTypes.number
};
ScoreMoyenLabel.defaultProps = {
  score: 0
};
export default ScoreMoyenLabel;
