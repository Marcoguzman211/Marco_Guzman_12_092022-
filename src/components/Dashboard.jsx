import React, { useState} from "react";
import { useEffect } from "react";
import { getUserData, getUserDataActivity, getUserDataAverageSessions, getUserDataPerformance } from "../utils/API";
import ActivityType from "./ActivityType";
import MainActivity from "./MainActivity";
import Objectifs from "./Objectifs";
import ScoreMoyen from "./ScoreMoyen";
import SmallCard from "./SmallCard";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [scoreMoyen, setScoreMoyen] = useState(null);

  useEffect(() => {
    getUserData().then((data) => {
      //Gets username from API response
      setUserData(data.keyData);
      setUserFirstName(data.userInfos.firstName);
      setScoreMoyen(data.score);
    });
  }, []);

  let elements = [];
  for (const property in userData) {
    /* console.log(`${property}: ${userData[property]}`); */
    let object = {
      property: property,
      value: userData[property],
    };
    elements.push(<SmallCard data={object} key={property}/>);
  }

  return (
    <div className="dashboard-main-content">
        <div className="dashboard-header">
            <h1>Bonjour <mark className="red-text">{userFirstName}</mark></h1>
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
            {elements}
          </div>
        </div>
    </div>
  );
};

export default Dashboard;