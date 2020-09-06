const express = require("express");
const router = express.Router();

const Time = require("../models/Times");

// Saving new time to the database and updating existing times
router.post("/", (req, res) => {
  const { id } = req.body;

  // Updating time
  if (id) {
    return Time.findOneAndUpdate(
      {
        _id: id,
      },
      {
        endTime: Date.now(),
      },
      {
        new: true,
      }
    ).then((data) => res.json(data));
  }

  const newTime = new Time();

  // Saving time
  newTime
    .save()
    .then(() => res.json(newTime))
    .catch((error) => res.json(error));
});

module.exports = router;
