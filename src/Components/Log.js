import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function Log({ log, index }) {
  return (
    <div className="Log">
      <tr>
        <td>
          {log.daysSinceLastCrisis ? (
            <span>⭐️</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
        </td>
        {log.captainName} - {log.title}
        <td>
          <Link to={`/logs/${index}`}>✏️</Link>
        </td>
      </tr>
    </div>
  );
}

export default Log;
