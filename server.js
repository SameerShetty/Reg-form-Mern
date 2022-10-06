const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/robocor");

const particiSchema = new mongoose.Schema({
  teamname: {
    type: String,
  },
  teamlead: {
    type: String,
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

app.get("/registerteam", function (req, res) {
  const newt = req.body.title;
  console.log(newt);
});
// const { tname, tlead, m2, m3, m4, events } = req.body;
// const gp = new Team({
//   tname,
//   tlead,
//   m2,
//   m3,
//   m4,
//   events,
// });
// console.log(gp);
// gp.save();
// res.sendStatus(200);

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
