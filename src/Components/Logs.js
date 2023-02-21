import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log.js";

const API = process.env.REACT_APP_BASE_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}logs`)
      .then((res) => {
        setLogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="logs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
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
