import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Log from "./Log";
const API = process.env.REACT_APP_API_URL;

export default function LogsIndex() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => {
        console.log(response.data);
        setLogs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <h1>List of all the logs</h1>
      <ul>
        {logs.map((log, i) => {
          return <Log log={log} i={i} />;
        })}
      </ul>
    </div>
  );
}
