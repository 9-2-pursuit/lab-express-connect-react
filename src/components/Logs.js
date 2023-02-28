import { useState, useEffect
 } from "react";
import axios from "axios"

import Log from "./Log";

const API = process.env.REACT_APP_API_URL;

const Logs = () => {

    const [ logs, setLogs] = useState([]);


    useEffect(() => {
        axios
          .get(`${API}/logs`)
          .then((response) => {
            console.log(response);
            setLogs(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);


return (
    <div className="Logs">
    <div className="name">
    </div>
    <table className="info">
      {logs.map((log, index) => {
        return <Log key={index} log={log} index={index} />;
      })}
    </table>
  </div>
);

}

export default Logs;