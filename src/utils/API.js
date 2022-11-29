import axios from "axios";

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
          element.kind = kindsList[i];
        }
      }
    });
    return dataFetched.data.data;
  } catch (error) {
    console.log(error);
  }
};

/* 
4.1 Possible endpoints
This project includes four endpoints that you will be able to use:

http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).



*/
