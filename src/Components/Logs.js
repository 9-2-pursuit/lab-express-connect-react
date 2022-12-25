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
      <section>
        <table>
          <thead>
            <tr>
              <th></th>

              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
