import { Link } from "react-router-dom";
function Log({ log, index }) {
  return (
    <div className="Log">
      <tr>
        <td>
          <p>
            {log.captainName} {log.title}
          </p>

          <Link to={`/logs/${index}`}>✏️</Link>
        </td>
      </tr>
    </div>
  );
}

export default Log;
