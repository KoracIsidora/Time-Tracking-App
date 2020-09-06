const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

// Saving an user to database
router.post("/", (req, res) => {
  const { fullName, email, password } = req.body;

  // Check if fields are not empty
  if (!fullName || !email || !password) {
    return res.status(400).json("Please enter all fields");
  }

  // Check for existing user
  User.findOne({ email }).then((existingUser) => {
    if (existingUser)
      return res.status(400).json({ message: "User already exists." });
    else {
      res.status(200).json({ message: "Successfull registration" });
    }

    const newUser = new User({
      fullName: fullName,
      email: email,
      password: password,
    });

    // Hashing password and saving and registering newUser to database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(user.id, "secretKey");
          (err, token) => {
            if (err) throw err;

            res.json({
              success: true,
              token: token,
              user,
            });
          };
        });
      });
    });
  });
});

module.exports = router;
