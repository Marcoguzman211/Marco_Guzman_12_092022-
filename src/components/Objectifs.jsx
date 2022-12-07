import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getUserDataAverageSessions } from "../utils/API";
import { dayConverter } from "../utils/converter";

const Objectifs = () => {
  const [userDataAverageSessions, setUserDataAverageSessions] = useState(null);

  useEffect(() => {
    getUserDataAverageSessions().then(data => {
      data.forEach(element => {
        element.day = dayConverter(element.day - 1);
      });
      setUserDataAverageSessions(data);
    }).catch((err) => {
      alert("Error getting user data " + err);
    });
  }, []);
  
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={userDataAverageSessions}
            margin={{ top: 60, right: 0, left: 0, bottom: 40 }} stroke="#ffffff" fillOpacity={0.5}>
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="day" axisLine={false}
            tickLine={false} style={{ transform: "scale(0.93)", transformOrigin: "bottom" }} />
            <XAxis dataKey="sessionLength" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            {/* <Line type="monotone" dataKey="day" stroke="#8884d8" /> */}
            <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Objectifs;