import React, { useState } from "react";
import { useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import { getUserDataActivity } from "../utils/API";
import MainActivityLabel from "./MainActivityLabel";

/**
 * Phrase de la tooltip
 * @param {bool} active 
 * @param {array} payload 
 * @returns {JSX}
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity-custom-tooltip">
        <p className="label">{payload[0].value}kg</p>
        <p className="intro">{payload[1].value}kCal</p>
      </div>
    );
  }
  return null;
};


const MainActivity = () => {
  const [userDataActivity, setUserDataActivity] = useState(null);

useEffect(() => {
  getUserDataActivity().then(data => {
    setUserDataActivity(data);
  }).catch((err) => {
    alert("Error getting user data " + err);
  });
}, []);

  return (
    <>
        <MainActivityLabel />
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            /* width={500} */
            barGap={8}
            data={userDataActivity}
            margin={{
                top: 5,
                right: 29,
                left: 43,
                bottom: 20,
            }}
            >
              <CartesianGrid strokeDasharray="1 1" vertical={false} />
              <XAxis dataKey="day" padding={{
                top: 0,
                right: -45,
                left: -45,
                bottom: 0,
              }} tickLine={{ stroke: "" }} dy={15} />
              <YAxis yAxisId="kilogram" dataKey="kilogram" orientation="right" tickCount="3" axisLine={false} tickLine={{ stroke: "" }} domain={["dataMin-2", "dataMax+1"]}/>
              <YAxis yAxisId="calories" dataKey="calories" type="number" hide={true} />
              <Tooltip content={<CustomTooltip/>} wrapperStyle={{ outline: "none" }}/>
              {/* <Legend /> */}
              <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[20, 20, 0, 0]}/>
              <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[20, 20, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    </>
  );
};

//Proptypes of CustomTooltip
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default MainActivity;