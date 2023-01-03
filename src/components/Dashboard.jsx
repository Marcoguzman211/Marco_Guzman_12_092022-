import React, { useState } from "react";
import { useEffect } from "react";
import { getUserData } from "../utils/API";
import ActivityType from "./ActivityType";
import MainActivity from "./MainActivity";
import Objectifs from "./Objectifs";
import ScoreMoyen from "./ScoreMoyen";
import ScoreMoyenLabel from "./ScoreMoyenLabel";
import SmallCard from "./SmallCard";

/**
 *
 * @returns jsx of Dashboard
 */
const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [scoreMoyen, setScoreMoyen] = useState(null);

  useEffect(() => {
    getUserData().then((data) => {
      //Gets username from API response
      setUserData(data.keyData);
      setUserFirstName(data.userInfos.firstName);
      setScoreMoyen(data.score || data.todayScore);
    });
  }, []);

  let elements = [];
  for (const property in userData) {
    let object = {
      property: property,
      value: userData[property]
    };
    elements.push(<SmallCard data={object} key={property} />);
  }
  return (
      /* Header */
    <div className="dashboard-main-content">
      <div className="dashboard-header">
        <h1>
          Bonjour <mark className="red-text">{userFirstName}</mark>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      {/* Graphiques Recharts */}
      <div className="all-graphs-plus-average">
        <div className="all-graphs">
          <div className="up-graph">
            <MainActivity />
          </div>
          <div className="down-graphs">
            <div className="objectifs-graph">
              <Objectifs />
            </div>
            <div className="activity-graph">
              <ActivityType />
            </div>
            <div className="scoremoyen-graph">
              <div className="scoremoyen-title">Score</div>
              <ScoreMoyen data={scoreMoyen} />
              <ScoreMoyenLabel score={scoreMoyen} />
            </div>
          </div>
        </div>
        <div className="average-container">{elements}</div>
      </div>
    </div>
  );
};

export default Dashboard;
