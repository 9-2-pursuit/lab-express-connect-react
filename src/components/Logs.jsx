import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Logs(){
    const [logs, setLogs] = useState([]);

    let i = 0;

    useEffect(() => {
      axios.get(`${API}/logs`).then((response) => {
        setLogs(response.data);
      });
    }, []);


console.log(logs)

      return <ul>
        <h3>
          <Link to="./new">New Log</Link>
        </h3>
        <Table>
        <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain name</th>
              <th>See this log</th>

            </tr>
        </thead>
        {logs.map((log, idx) =>   {
            
            let link = `./${i}`;
            i++;

            return(

      <tr key={idx} className="g8">
        <td>{log.mistakesWereMadeToday}</td>
        <td>{log.captainName}</td>
       <td>
            <p className="Log">
            <Link to={link}>{log.title}</Link>
            </p>
            </td>
            <footer className="blockquote-footer">
            Days since Last Crisis: {log.daysSinceLastCrisis}
            </footer>
          
      </tr>

    )})} 
    </Table>
    </ul>
}