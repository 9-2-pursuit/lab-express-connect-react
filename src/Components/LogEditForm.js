import axios from "axios";
import LogDetails from "./LogDetails";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
function LogEditForm() {
  const API = process.env.REACT_APP_API_URL;
  let { index } = useParams();
  let navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSincelastCrisis: "",
  });

  const [edit, setEdit] = useState(log)
  

  console.log(log);

  useEffect(() => {}, [index]);

  function handleTextChange(e) {
    setLog({ ...log, [e.target.id]: e.target.value });
  }

  function handleCheckBoxChange() {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  }

  function handleNewLog(e) {
    e.preventDefault();
    axios.post(`${API}/logs`, log).then(() => navigate(`/logs/${index}`));
    console.log(edit)
  }
  console.log(log);
  return (
    <div className="Edit">
      <header>Edit Captain's Log</header>
      <form onSubmit={handleNewLog}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          value={edit.captainName}
          onChange={handleTextChange}
       
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.title}
          onChange={handleTextChange}
     
          required
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          value={log.post}
          onChange={handleTextChange}
     
       
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckBoxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSincelastCrisis}
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
