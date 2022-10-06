import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [total, settotal] = useState(0);
  const [events, setevents] = useState([]);
  const [team, setteam] = useState({
    teamname: "",
    teamlead: "",
    member_2: "",
    member_3: "",
    member_4: "",
  });

  function handleClick(event) {
    event.preventDefault();
    const gpteam = {
      teamname: team.teamname,
      teamlead: team.teamlead,
      member_2: team.member_2,
      member_3: team.member_3,
      member_4: team.member_4,
      eventslist: events,
    };

    // axios
    //   .post("/registerteam", gpteam)
    //   .then((response) => {
    //     console.log(response.status);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const article = { title: "React POST Request Example" };
    axios
      .post("/registerteam", article)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }
  function handleChange(e) {
    const value = e.target.value;
    setteam({
      ...team,
      [e.target.name]: value,
    });
  }

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;

    if (checked) {
      setevents((prev) => {
        return [...prev, name];
      });
      settotal(Number(total) + Number(value));
    } else {
      settotal((prev) => {
        return Number(prev) - Number(value);
      });
      setevents(events.filter((e) => e !== name));
    }
  };

  return (
    <div className="register-wrapper" style={{ backgroundColor: "#f0f5f9" }}>
      <div className="form-container">
        <div className="details">
          <form>
            <label for="tname">
              Team Name :
              <input
                type="text"
                name="teamname"
                placeholder="Enter your team name"
                id="tname"
                value={team.teamname}
                required
                onChange={handleChange}
              />
            </label>
            <label for="tlead">
              Team Leader :
              <input
                type="text"
                required
                onChange={handleChange}
                name="teamlead"
                value={team.teamlead}
                placeholder="Enter your team leader"
                id="tlead"
              />
            </label>
            <label for="m2">
              Team Member 2 :
              <input
                type="text"
                value={team.member_2}
                onChange={handleChange}
                name="member_2"
                placeholder="Enter your team member"
                id="m2"
              />
            </label>
            <label for="m3">
              Team Member 3 :
              <input
                type="text"
                onChange={handleChange}
                name="member_3"
                value={team.member_3}
                placeholder="Enter your team member"
                id="m3"
              />
            </label>
            <label for="m4">
              Team Member 4 :
              <input
                type="text"
                onChange={handleChange}
                name="member_4"
                value={team.member_4}
                placeholder="Enter your team member"
                id="m4"
              />
            </label>
          </form>
        </div>
        <div className="event-details">
          <form>
            <div>
              <div>
                <input
                  type="checkbox"
                  name=" D-CODE"
                  value={100}
                  onChange={handleOnChange}
                />
                D-CODE
              </div>

              <p>$100</p>
            </div>
            <div>
              <div>
                <input
                  type="checkbox"
                  name="  BINARY RASH"
                  value={400}
                  onChange={handleOnChange}
                />
                BINARY RASH
              </div>

              <p>$400</p>
            </div>
            <div>
              <div>
                <input
                  type="checkbox"
                  name=" INIT_RC"
                  value={400}
                  onChange={handleOnChange}
                />
                INIT_RC
              </div>

              <p>$400</p>
            </div>
            <div>
              <div>
                <input
                  type="checkbox"
                  name="PAPER"
                  value={200}
                  onChange={handleOnChange}
                />
                PAPER
              </div>

              <p>$200</p>
            </div>
            <div>
              <div>
                <input
                  type="checkbox"
                  name="PROJECT SYMPOSIUM"
                  value={400}
                  onChange={handleOnChange}
                />
                PROJECT SYMPOSIUM
              </div>

              <p>$400</p>
            </div>
            <div>
              <div>
                <input
                  type="checkbox"
                  name="ARDUINO CLASH"
                  value={150}
                  onChange={handleOnChange}
                />
                ARDUINO CLASH
              </div>

              <p>$150</p>
            </div>
            <div>
              <div>
                <input
                  type="checkbox"
                  name="ROBO SOCCER"
                  value={400}
                  onChange={handleOnChange}
                />
                ROBO SOCCER
              </div>

              <p>$400</p>
            </div>
            <div>
              <div>
                <input
                  type="checkbox"
                  name="RUGGED RAGE"
                  value={400}
                  onChange={handleOnChange}
                />
                RUGGED RAGE
              </div>

              <p>$400</p>
            </div>
            <div>
              <div>
                <input
                  type="checkbox"
                  name="SPARDHA"
                  value={100}
                  onChange={handleOnChange}
                />
                SPARDHA
              </div>

              <p>$100</p>
            </div>
          </form>
          <button
            className="btn"
            disabled
            style={{
              alignSelf: "flex-start",
              margin: "0 1rem",
            }}
          >
            {" "}
            Total :{total}$
          </button>
          <button
            onclick={handleClick}
            className="btn"
            style={{
              alignSelf: "flex-end",
              margin: ".5rem 1rem",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
