import React from "react";
import { Link } from "react-router-dom";

export default function Log({ log, i }) {
  return (
    <tr>
      <td>{log.mistakesWereMadeToday ? (
        <span>🎇</span>
      ) : (
        <span></span>
      )}</td>

      <td>{log.captainName}</td>

      <td><Link to={`/logs/${i}`}>{log.title}</Link></td>
    </tr>
    // <li key={log.title} className="Log">
    //   <Link to={`/logs/${i}`}>{log.title}</Link>
    // </li>
  );
}
