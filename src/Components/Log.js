import { Link } from "react-router-dom";

export default function Log({ log, index }) {
  return (
    <tr className="Log">
      <td>
        {" "}
        {log.mistakesWereMadeToday ? (
          <span>❗️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>{log.captainName}</td>
      <td>
        <Link to={`/logs/${index}`}> {log.title} </Link>
      </td>

    </tr>
  );
}
