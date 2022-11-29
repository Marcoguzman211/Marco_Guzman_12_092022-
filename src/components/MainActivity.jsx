import React, { useState } from "react";
import { useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getUserDataActivity } from "../utils/API";

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
            /* height={300} */
            data={userDataActivity}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis dataKey="kilogram"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#E60000" />
            <Bar dataKey="calories" fill="#282D30" />
            </BarChart>
        </ResponsiveContainer>
    </>
  );
};

export default MainActivity;