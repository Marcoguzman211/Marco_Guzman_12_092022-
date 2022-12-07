import React, { useState } from "react";
import { useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import { getUserDataActivity } from "../utils/API";

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
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day"  />
              <YAxis dataKey="kilogram" orientation="right" tickCount="3" axisLine={false} tickLine={{ stroke: "" }} />
              <Tooltip content={<CustomTooltip />}/>
              {/* <Legend /> */}
              <Bar dataKey="kilogram" fill="#E60000" barSize={7} radius={[20, 20, 0, 0]}/>
              <Bar dataKey="calories" fill="#282D30" barSize={7} radius={[20, 20, 0, 0]}/>
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