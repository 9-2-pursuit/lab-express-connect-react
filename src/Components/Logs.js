import Log from "./Log"
import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => setLogs(response.data))
      .catch((e) => console.error("catch", e));
  }, []);
;
  return (
    <div className="logs text-center">
      <section>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>Edit Log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Logs;