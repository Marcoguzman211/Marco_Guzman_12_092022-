import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { getUserDataAverageSessions } from "../utils/API";
import { dayConverter } from "../utils/converter";
import PropTypes from "prop-types";
import ObjectifsLabel from "./ObjectifsLabel";

/**
 *Brève explication du projet.
 * @param {array} payload
 * @param {bool} active
 * @returns {JSX} Custom tooltip for the average sessions chart.
 */
const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="objectifs-custom-tooltip">
        <p className="label">
          {payload[0].value}
          <span> min</span>
        </p>
      </div>
    );
  }
  return null;
};

/**
 *
 * @param {number} points
 * @returns {JSX.Element} Custom hover for the average sessions chart.
 */
const CustomHover = ({ points }) => {
  return (
    <rect
      className="objectifs-custom-hover"
      x={points[0].x}
      y={0}
      height="100%"
      width="100%"
      fill="rgba(0, 0, 0, 0.2)"
    />
  );
};

/**
 *Graphique Durée moyenne des sessions
 * @returns {JSX.Element} of Average sessions type Recharts's chart.
 */
const Objectifs = () => {
  const [userDataAverageSessions, setUserDataAverageSessions] = useState(null);

  useEffect(() => {
    getUserDataAverageSessions()
      .then((data) => {
        data.forEach((element) => {
          element.day = dayConverter(element.day - 1);
        });
        setUserDataAverageSessions(data);
      })
      .catch((err) => {
        alert("Error getting user data " + err);
      });
  }, []);

  return (
    <>
      <ObjectifsLabel />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={userDataAverageSessions}
          margin={{ top: 60, right: 0, left: 0, bottom: 40 }}
          stroke="#ffffff"
          fillOpacity={0.5}>
          <XAxis
            dataKey="day"
            dy={10}
            axisLine={false}
            tickLine={false}
            interval={0}
            stroke="#ffffff"
            style={{ transform: "scale(0.93)", transformOrigin: "bottom" }}
          />
          <YAxis hide={true} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            dot={false}
            activeDot={{ r: 1 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomHover />}
            wrapperStyle={{ outline: "none" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

CustomTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool
};

// Proptypes customHover
CustomHover.propTypes = {
  points: PropTypes.array
};

export default Objectifs;
