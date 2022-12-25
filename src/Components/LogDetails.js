import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
function LogDetails() {
  //get apit key
  const API = process.env.REACT_APP_API_URL;
  //set a state for data
  const [log, setLogs] = useState([]);
  //use params to link index for react
  let { index } = useParams();
  //use effect to get data on page load
  useEffect(() => {
    //set path for a log's index
    axios.get(`${API}/logs/${index}`).then((response) => {
      setLogs(response.data);
      console.log(response.data, 'data for log index')
    });
  }, []);

  const handleDeletion = () => {

  }

  return (
    <article>
        <header><h3>Show Captain's Log</h3></header>
        <h2>{log.title} - By {log.captainName}  </h2>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
        <p>{log.post}</p>
        <nav>
        <a href="/logs">/logs</a>{" "}
        <Link to={"/logs"}>/logs</Link>{" "}
        <Link to={`/logs/${index}/edit`}>Edit</Link>{" "}
        <a href={`logs/${index}/edit`}>Edit</a>{" "}
        </nav>
        <button onClick={handleDeletion}>Delete</button>
        
    </article>
  )
}
export default LogDetails;
