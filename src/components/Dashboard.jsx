import React, { useState} from "react";
import { useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
/* import {USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE} from "../mocks/data"; */

import { getUserData, getUserDataActivity } from "../utils/API";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [userDataActivity, setUserDataActivity] = useState(null);

  useEffect(() => {
    getUserData().then((data) => {
      //Gets username from API response
      const userName = data.data.data.userInfos.firstName;
      setUserData(userName);
    });

    getUserDataActivity().then((data) => {
      //Gets activity data from API response
      const userActivity = data.data.data.sessions;
      setUserDataActivity(userActivity);
    });
  }, []);

  console.log(userDataActivity);
  return (
    <div>
        {/* Header Title et félicitations */}
        <div>
            <h1>Bonjour</h1><h1>{userData}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        {/* Main Activity */}
        <div>
        </div>
    </div>
  );
};

export default Dashboard;