import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
function LogDetails() {
  //get api key
  const API = process.env.REACT_APP_API_URL;
  //set a state for data
  const [log, setLogs] = useState([]);
  //use params to link index for react
  let { index } = useParams();
  //use effect to get data on page load
  useEffect(() => {
    //set route for a log's index
    axios.get(`${API}/logs/${index}`).then((response) => {
      setLogs(response.data);
      console.log(response.data, "data for index");
    });
  }, []);

  const handleDeletion = () => {};

  return (
    <div className="LogDetails">
      <article>
        <header>Show Captain's Log</header>
        <h2>
          {log.title} - By {log.captainName}{" "}
        </h2>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
        <p>{log.post}</p>
      </article>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDeletion}>Delete</button>{" "}
    </div>
  );
}
export default LogDetails;
