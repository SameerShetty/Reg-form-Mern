const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/robocor");

const particiSchema = new mongoose.Schema({
  teamname: {
    type: String,
    required: [1, ""],
  },
  teamlead: {
    type: String,
    required: [1, ""],
  },
  member_2: {
    type: String,
  },
  member_3: {
    type: String,
  },
  member_4: {
    type: String,
  },
  eventname: [
    {
      type: String,
    },
  ],
});

const Team = mongoose.model("Team", particiSchema);

app.post("/registerteam", function (req, res) {
  const gp = new Team({
    teamname: req.body.teamname,
    teamlead: req.body.teamlead,
    member_2: req.body.member_2,
    member_3: req.body.member_3,
    member_4: req.body.member_4,
    eventname: req.body.eventslist,
  });
  gp.save((err) => {
    if (err) {
      console.log(err);
    } else res.sendStatus(200);
  });
});
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client-form/build"));
//   }
//   app.use(express.static("client-form/build"));
//   app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/client-form/build/index.html");
//   });
//   app.get("*", (req, res) => {
//     res.sendFile(__dirname + "/client-form/build/index.html");
//   });
app.listen(PORT, () => {
  console.log("Server is up and running on the port " + PORT);
});
