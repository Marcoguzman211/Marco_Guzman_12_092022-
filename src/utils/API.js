import axios from "axios";
import { performanceTranslator } from "./converter";

/**
 *
 * @returns {Promise} containing the user data
 */
export const getUserData = async () => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}`
    );
    return data.data.data;
  } catch (error) {
    console.log(error);
  }
};

// Get Activity data
/**
 * @returns {Promise} containing the user activity data
 */
export const getUserDataActivity = async () => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}/activity`
    );
    const userActivity = data.data.data.sessions;
    userActivity.forEach((activity) => {
      activity.day = new Date(activity.day).getDate();
    });
    return userActivity;
  } catch (error) {
    console.log(error);
  }
};

// Get average sessions data
/**
 * @returns {Promise} containing the user average sessions data
 **/
export const getUserDataAverageSessions = async () => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}/average-sessions`
    );
    return data.data.data.sessions;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @returns {Promise} containing the user performance data
 */
export const getUserDataPerformance = async () => {
  try {
    const dataFetched = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}/performance`
    );

    const kinds = dataFetched.data.data.kind;
    let kindsList = [];

    for (let kind in kinds) {
      kindsList.push(kinds[kind]);
    }

    dataFetched.data.data.data.forEach((element) => {
      //Element.kind et element.value
      for (let i = 0; i < kindsList.length; i++) {
        if (element.kind - 1 === i) {
          /* element.kind = kindsList[i].charAt(0).toUpperCase() + kindsList[i].slice(1); */
          element.kind = performanceTranslator(kindsList[i]);
        }
      }
    });
    return dataFetched.data.data;
  } catch (error) {
    console.log(error);
  }
};
