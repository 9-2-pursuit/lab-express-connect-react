import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Log from "./Log";
function Logs() {
  const API = process.env.REACT_APP_API_URL;

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`) //URL
      .then((response) => {
        setLogs(response.data);
      });
  }, []);

  return (
    <div className="Logs">
      {logs.map((log, index) => {
        return <Log key={index} log={log} index={index} />;
      })}
    </div>
  );
}

export default Logs;
