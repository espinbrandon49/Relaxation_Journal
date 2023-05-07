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
  feeling: {
    type: String,
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
},
  { timestamps: true }
)

const Entry = model("Entry", entrySchema);

module.exports = Entry;