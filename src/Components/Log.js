import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr className="Log">
      <td>
        {log.mistakesWereMadeToday ? (
          <span>💥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>

      <td>
        <Link to={`/logs/${index}`} target="_blank" rel="noreferrer">
          {log.captainName}
        </Link>
      </td>
      <td>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  );
}

export default Log;
