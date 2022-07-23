const getAllWorkouts = (req, res) => {
  res.send("Get All Workouts");
};

const getOneWorkout = (req, res) => {
  res.send(`Get workout ${req.params.workoutId}`);
};

const createNewWorkout = (req, res) => {
  res.send(`Create workout`);
};

const updateOneWorkout = (req, res) => {
  res.send(`Update workout ${req.params.workoutId}`);
};

const deleteOneWorkout = (req, res) => {
  res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
