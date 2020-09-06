const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    // required: true,
  },
  startTime: {
    type: Date,
    required: true,
    default: Date.now()
  },
  endTime: {
    type: Date
  }
});

module.exports =  mongoose.model("Times", TimeSchema);
