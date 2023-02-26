import { useEffect, useState } from "react";
import { getAllLogs } from "./fetch";
import { Link } from "react-router-dom";

export default function LogsTitles() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getAllLogs().then((logList) => {
      setLogs(logList);
    });
  }, []);

  return (
    <div>
      <h1>Log Titles:</h1>
      {logs.map((log, index) => (
        <div key={log.title}>
          <td>
            <Link className="Log" to={`/logs/${index}`}>
              {`${log.title} - ${log.captainName}`}
            </Link>
          </td>
        </div>
      ))}
    </div>
  );
}
