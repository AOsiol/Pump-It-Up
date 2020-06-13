const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  weight: {
    type: Number,
  },

  sets: {
    type: Number,
  },

  reps: {
    type: Number,
  },

  duration: {
    type: Number,
  },

  distance: {
    type: Number,
  },

  type: {
    type: String,
    trim: true,
    required: true,
  },

  name: {
    type: String,
    trim: true,
    unique: true,
  },
});

const Workout = mongoose.model("Workout", ExerciseSchema);

module.exports = Workout;
