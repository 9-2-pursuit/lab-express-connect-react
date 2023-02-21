import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <h2> Welcome to Tony's Captain's Logs</h2> <br />
      <button>
        <Link to="/logs">All Logs</Link>
      </button>
    </div>
  );
}

export default Landing;
