import React, { useState} from "react";
import { useEffect } from "react";
import { getUserData, getUserDataActivity, getUserDataAverageSessions, getUserDataPerformance } from "../utils/API";
import ActivityType from "./ActivityType";
import MainActivity from "./MainActivity";
import Objectifs from "./Objectifs";
import ScoreMoyen from "./ScoreMoyen";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [scoreMoyen, setScoreMoyen] = useState(null);

  useEffect(() => {
    getUserData().then((data) => {
      //Gets username from API response
      setUserData(data);
      setUserFirstName(data.userInfos.firstName);
      setScoreMoyen(data.score);
    });
  }, []);
  return (
    <div className="dashboard-main-content">
        <div className="dashboard-header">
            <h1>Bonjour</h1><h1>{userFirstName} </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        {/* Main Activity */}
        <div className="all-graphs-plus-average">
          <div className="all-graphs">
            <div className="up-graph">
            <MainActivity />
            </div>
            <div className="down-graphs">
              <Objectifs />
              <ActivityType />
              <ScoreMoyen data={scoreMoyen} />
            </div>
          </div>
          <div className="average-container">

          </div>
        </div>
    </div>
  );
};

export default Dashboard;