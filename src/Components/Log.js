import { Link } from "react-router-dom";
function Log({ log, index }) {
  return (
    <div className="Log">
      <p>
        {log.captainName} {log.title}
      </p>
      <Link to={`/logs/${index}`}>✏️</Link>
    </div>
  );
}

export default Log;
