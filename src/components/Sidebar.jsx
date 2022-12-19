import React from "react";
import meditationIcon from "../assets/meditation-icon.png";
import weightIcon from "../assets/weight-icon.png";
import bikeIcon from "../assets/bike-icon.png";
import swimmingIcon from "../assets/swimming-icon.png";

/**
 * 
 * @returns {JSX.Element} of the sidebar containing the icons.
 */
const Sidebar = () => {
  return (
    <div className="sidebar-container">
        <p>Copyright, SportSee 2022</p>
        <img src={weightIcon} alt="icon de poids" />
        <img src={bikeIcon} alt="icon d'un vélo" />
        <img src={swimmingIcon} alt="icon d'un nageur" />
        <img src={meditationIcon} alt="icon de meditation" />
    </div>
  );
};

export default Sidebar;