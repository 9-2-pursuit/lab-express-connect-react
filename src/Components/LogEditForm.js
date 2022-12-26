import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function LogEditForm() {
  const API = process.env.REACT_APP_API_URL;
  let { index } = useParams();
  let  navigate = useNavigate();
  const [newLog, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSincelastCrisis: "",
  });

  useEffect(() => {}, []);

  function handleTextChange(e) {
    setLog({ ...newLog, [e.target.id]: e.target.value });
  }

  function handleCheckBoxChange() {
    setLog({ ...newLog, mistakesWereMadeToday: !newLog.mistakesWereMadeToday });
  }

  function handleNewLog(e) {
    e.preventDefault();
    axios.post(`${API}/logs`, newLog).then(() => navigate(`/logs/${index}`));
  }

  return (
    <div className="Edit">
      <header>Edit Captain's Log</header>
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
      <Link to={`/logs/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default LogEditForm;
