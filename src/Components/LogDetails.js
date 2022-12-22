import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
  const [log, setLog] = useState({});
  const { index } = useParams();
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => console.log(e));
  }, [index]);

  function handleDelete() {}

  return (
    <div className="Log">
      <div className="LogCard">
        <h1>Show</h1>
        <h2>
          {log.title} - By {log.captainName}
        </h2>
        <p>{log.post}</p>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
        <p>Mistakes made today: {log.mistakesWereMadeToday ? "Yes" : "No"}</p>
      </div>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
