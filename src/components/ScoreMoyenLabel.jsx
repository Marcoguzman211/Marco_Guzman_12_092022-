import React from "react";
import { PropTypes } from "prop-types";

const ScoreMoyenLabel = ({ score }) => {
  return (
    <div>
        <div className="scoremoyen-result">
            <div>{score * 100}%</div>
            <div>de votre</div>
            <div>objectif</div>
        </div>
    </div>
  );
};

ScoreMoyenLabel.propTypes = {
    score: PropTypes.number,
};
ScoreMoyenLabel.defaultProps = {
    score: 0
};
export default ScoreMoyenLabel;