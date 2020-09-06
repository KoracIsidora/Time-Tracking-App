const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Validate if all fields are filled
  if (!email || !password) {
    return res.status(400).json("Please enter all fields");
  }

  // Check for existing user
  User.findOne({ email })
    .then((user) => {
      if (!user)
        return res.status(400).json({ message: "User does not exist." });

      // Validate password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch)
          return res.status(400).json({ message: "Invalid credentials." });
        else {
          let tokenM = jwt.sign(user.id, "secretKey");
          return res
            .status(200)
            .json({ message: "Successful login.", token: tokenM });
        }
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
