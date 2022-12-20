import React from "react";
import fireIcon from "../assets/fire-icon.png";
import chickenIcon from "../assets/chicken-icon.png";
import appleIcon from "../assets/apple-icon.png";
import cheeseburguerIcon from "../assets/cheeseburger-icon.png";
import { useState } from "react";
import { useEffect } from "react";

/**
 *
 * @param {Array} data
 * @returns {JSX.Element} of the small card containing one icon and information.
 */
const SmallCard = (data) => {
  const [property, setProperty] = useState(data.data.property);
  const [value, setValue] = useState(data.data.value);
  const [image, setImage] = useState(null);

  useEffect(() => {
    switch (data.data.property) {
      case "calorieCount":
        setImage(fireIcon);
        setProperty("Calories");
        setValue(`${value.toLocaleString("en-US")}kCal`);
        break;
      case "proteinCount":
        setImage(chickenIcon);
        setProperty("Protéines");
        setValue(`${value}g`);
        break;
      case "carbohydrateCount":
        setImage(appleIcon);
        setProperty("Glucides");
        setValue(`${value}g`);
        break;
      case "lipidCount":
        setImage(cheeseburguerIcon);
        setProperty("Lipides");
        setValue(`${value}g`);
        break;
    }
  }, []);

  return (
    <div className="smallcard-container">
      <div className="smallcard-image">
        <img src={image} alt="fire-icon" />
      </div>
      <div className="smallcard-texts">
        <h3>{value}</h3>
        <p>{property}</p>
      </div>
    </div>
  );
};

export default SmallCard;
