import axios from "axios";
import { useState, useEffect } from "react";

function Logs() {
  const API = process.env.REACT_APP_API_URL;

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`) //URL
      .then((response) => {
        setLogs(response.data);
        console.log(response)
        console.log(response);
      });
  }, []);

  return (<div className="Logs">
        
  </div>
  )
}

export default Logs;
