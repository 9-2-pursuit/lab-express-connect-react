import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

export default function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((err) => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  function handleDelete() {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => navigate("/logs"))
      .catch(console.error);
  }

  return (
    <article>
      <h3>
        {log.title} - By {log.captainName};
      </h3>
      <h4>{log.post}</h4>
      <h5>Days since last crisis: {log.daysSinceLastCrisis}</h5>
      <h5>Mistakes were made: {log.mistakesWereMadeToday}</h5>
      <p>Post: {log.post}</p>
      <div className="show-navigation">
        <div className="btn">
          <Link to={"/logs"}>
            <button>Back</button>
          </Link>
        </div>
        <div className="btn">
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}
