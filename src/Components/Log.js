import React from "react";
import { Link } from "react-router-dom";

export default function Log({ log, i }) {
  return (
    <li key={log.title}>
      <Link to={`/logs/${i}`}>{log.title}</Link>
    </li>
  );
}
