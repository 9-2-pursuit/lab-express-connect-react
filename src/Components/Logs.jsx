import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Log from "./Log";

const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => {
        // console.log(response);
        setLogs(response.data);
      })
      .catch((error) => console.warn("catch", error));
  }, []);

  return (
    <div className="Logs">
      <section>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Captain Name</th>
              <th>Title</th>
              <th>Were Mistakes Made?</th>
              <th>Days Since Last Crisis</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => {
              return (
                <Log
                  key={
                    log.captainName +
                    log.post.substring(0, 3) +
                    log.title.substring(0, 3)
                  }
                  id={logs.findIndex(
                    (lg) =>
                      lg.post === log.post && lg.captainName === log.captainName
                  )}
                  log={log}
                  API={API}
                />
              );
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}
