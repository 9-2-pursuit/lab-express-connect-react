import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr className="Log">
      <td>{log.mistakesWereMadeToday ? <span>✅</span> : <span>❌</span>}</td>
      <td>
        <Link
          to={`/logs/${index}`}
          target="_blank"
          rel="noreferrer"
          className="bg-info bg-gradient text-dark p-2"
        >
          {log.captainName}
        </Link>
      </td>
      <td>
        <Link to={`/logs/${index}/edit`}>✍️</Link>
      </td>
    </tr>
  );
}

export default Log;
