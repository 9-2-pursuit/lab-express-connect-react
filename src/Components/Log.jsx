import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

// import Table from "react-bootstrap/Table";

export default function Log({ id, log, API }) {
  return (
    <tr>
      <td>
        <a href={`/logs/${id}`}>{log.captainName}</a>
      </td>
      <td>{log.title}</td>
      <td>{log.mistakesWereMadeToday ? "Yes" : "No"}</td>
      <td>{log.daysSinceLastCrisis}</td>
      <td>
        <Link to={`/logs/${id}/edit`}>
          <Button>✏️</Button>
        </Link>
      </td>
    </tr>
  );
}
