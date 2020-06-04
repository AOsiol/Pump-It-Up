const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Look at workout.js, resistance then cardio
const WorkoutSchema = new Schema({
  type: {
    type: Boolean,
    default: true,
  },

  // or...
  // 	type: {
  // 		type: String,
  //     trim: true,
  //     required: "Type is Required"
  //   }

  name: {
    type: String,
    trim: true,
    unique: true,
  },

  duration: {
    type: Number,
  },

  weight: {
    type: Number,
  },

  reps: {
    type: Number,
  },

  sets: {
    type: Number,
  },

  duration: {
    type: Number,
  },

  distance: {
    type: Number,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
