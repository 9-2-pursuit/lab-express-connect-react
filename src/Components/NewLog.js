import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewLog() {
    //CREATE, POST
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [newLog, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSincelastCrisis: "",
  });

  function handleTextChange(e) {
    setLog({ ...newLog, [e.target.id]: e.target.value });
  }

  function handleCheckBoxChange() {
    setLog({ ...newLog, mistakesWereMadeToday: !newLog.mistakesWereMadeToday });
  }

  function handleNewLog(e) {
    e.preventDefault();
    axios.post(`${API}/logs`, newLog)
    .then(() => navigate("/logs"))
    //axios.post makes a post request to the server. the object/newLog is posted to the index showing all logs
    //the post request takes a second argument of the newLog
    //when the promise is fulfilled useNavigate will navigate the user to the index showing all logs
    //.then takes a callback function. useNavigate is placed as an argument to navigate the user to the index.
  }
  return (
    <div className="NewLog">
      <header>Captain's Log</header>
      <form onSubmit={handleNewLog}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          value={newLog.captainName}
          onChange={handleTextChange}
          placeholder="captain name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={newLog.title}
          onChange={handleTextChange}
          placeholder="title"
          required
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          value={newLog.post}
          onChange={handleTextChange}
          placeholder="post"
          required //*
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckBoxChange}
          checked={newLog.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={newLog.daysSincelastCrisis}
          onChange={handleTextChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

// - captainName (text)
// - title (text)
// - post (text)
// - mistakesWereMadeToday (checkbox)
// - daysSinceLastCrisis (number)
// - submit (submit)

export default NewLog;
