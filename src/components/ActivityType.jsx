import React, { useState } from "react";
import { useEffect } from "react";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { getUserDataPerformance } from "../utils/API";

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
        <RadarChart width={263} height={258} 
            outerRadius="80%" data={userDataPerformance}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" tick={{ fontSize: 11 }}/>
            {/* <PolarRadiusAxis dataKey="value" /> */}
            <Radar dataKey="value" stroke="#e60000" 
                fill="#e60000" fillOpacity={0.6} />
        </RadarChart>
        </ResponsiveContainer>
    </>
  );
};

export default ActivityType;