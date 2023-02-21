import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_BASE_URL;

export default function EditLog() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const handleTextChange = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };
  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${API}logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((err) => console.error(err));
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(API);
    axios
      .put(`${API}logs/${index}`, log)
      .then(() => navigate(`/logs/${index}`))
      .catch(console.error);
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          required
          placeholder="Captain Name"
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title"
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={log.post}
          type="text"
          name="post"
          placeholder="Post"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Last Crisis..."
        />
        <input type="submit" value="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
