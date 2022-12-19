/**
 * Convert a date to a string
 * @param {Date} date
 * @returns {String} date (number) converted into string format
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
