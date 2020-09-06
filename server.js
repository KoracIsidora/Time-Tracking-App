const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();
app.use(cors());

app.use(bodyParser.json());

// Import Routes
app.use("/registration", require("./routes/users"));
app.use("/auth", require("./routes/auth"));
app.use("/times", require("./routes/times"));

// Connect to DB
mongoose.connect(
  process.env.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("Connected to MongoDB")
);


// Listen to the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
