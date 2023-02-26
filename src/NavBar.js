import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    return (
      <div>
        <header>
          <article>
            <h1>
              <Link to="/">
                <span> Captain's Log</span>
              </Link>
            </h1>
          </article>
          <nav>
            <ul>
              <li>
                <Link to="/logs">All Logs</Link>
              </li>
              <li>
                <Link to="/logs/new">New Log</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
}