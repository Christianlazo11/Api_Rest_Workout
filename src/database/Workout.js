const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
  const isAlReadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

  if (isAlReadyAdded) {
    return;
  }

  DB.workouts.push(newWorkout);
  saveToDatabase(DB);

  return newWorkout;
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
};
