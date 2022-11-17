import axios from "axios";

const USER_ID = 18;

export const getUserData = async () => {
  try {
    const data = await axios.get(`http://localhost:3001/user/${USER_ID}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get Activity data
export const getUserDataActivity = async () => {
  try {
    const data = await axios.get(`http://localhost:3001/user/${USER_ID}/activity`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
