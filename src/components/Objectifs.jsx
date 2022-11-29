import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getUserDataAverageSessions } from "../utils/API";

const Objectifs = () => {
  const [userDataAverageSessions, setUserDataAverageSessions] = useState(null);

  useEffect(() => {
    getUserDataAverageSessions().then(data => {
      setUserDataAverageSessions(data);
    }).catch((err) => {
      alert("Error getting user data " + err);
    });
  }, []);
  
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={263} height={258} data={userDataAverageSessions}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="day" />
            <XAxis dataKey="sessionLength" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Line type="monotone" dataKey="day" stroke="#8884d8" /> */}
            <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Objectifs;