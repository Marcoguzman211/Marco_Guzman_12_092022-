import React, { useState } from "react";
import { useEffect } from "react";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { getUserDataPerformance } from "../utils/API";


/**
 * 
 * @returns {JSX.Element} of Activity type rechart's chart.
 */
const ActivityType = () => {
  const [userDataPerformance, setUserDataPerformance] = useState(null);

  useEffect(() => {
    getUserDataPerformance().then(data => {
      setUserDataPerformance(data.data);
    }).catch((err) => {
      alert("Error getting user data " + err);
    }
    );
  }, []);
  return (
    <>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart width="50%" height="50%" cx="50%" cy="50%" 
            outerRadius="55%" data={userDataPerformance}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} stroke="#ffffff"/>
            <Radar dataKey="value" stroke="#e60000" 
                fill="#e60000" fillOpacity={0.6} />
          <PolarRadiusAxis axisLine={false} tick={false} />
        </RadarChart>
        </ResponsiveContainer>
    </>
  );
};

export default ActivityType;