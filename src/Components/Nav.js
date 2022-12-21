import { Link } from "react-router-dom";
function Nav() {

    return (
        <nav>
            <Link to="/">nav, Home</Link> ↘︎ 
            <Link to="/logs">logs, index</Link>↘︎
            {/* <Link>logs, new</Link> */}
        </nav>
    )

}
export default Nav;