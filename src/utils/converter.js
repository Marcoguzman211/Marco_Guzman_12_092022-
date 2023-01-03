/**
 * Convert a day to a string
 * @param {number} day
 * @returns {String} day (number) converted into string format
 */
export const dayConverter = (day) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return days[day];
};

/**
 *
 * @param {string} kind
 * @returns {string} translated into french
 */

export const performanceTranslator = (kind) => {
  switch (kind) {
    case "cardio":
      return "Cardio";
    case "energy":
      return "Energie";
    case "endurance":
      return "Endurance";
    case "strength":
      return "Force";
    case "speed":
      return "Vitesse";
    case "intensity":
      return "Intensité";
  }
};
