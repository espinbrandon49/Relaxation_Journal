const { Schema, model } = require("mongoose");

const entrySchema = new Schema({
  calmBreathing: {
    type: Boolean,
  },
  progressiveMuscleRelaxation: {
    type: Boolean,
  },
    exercise: {
    type: Boolean,
  },
  other: {
    type: Boolean,
  },
  gratitude1: {
    type: String,
    trim: true,
  },
  gratitude2: {
    type: String,
    trim: true,
  },
  gratitude3: {
    type: String,
    trim: true,
  },
  feelingWheelColor: {
    type: String,
  },
  entryDate: {
    type: Date,
  },
})

const Entry = model("entry", entrySchema);

module.exports = Entry;