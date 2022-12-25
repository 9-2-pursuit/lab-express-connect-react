import { Link } from "react-router-dom";
function Nav() {

    return (
        <nav>
            <Link to="/">/logs</Link>{" "}
            <Link to="/logs">/logs/:index</Link>{" "} 
            <Link to="/logs/new">New Log</Link>{" "}
        
        </nav>
    )

}
export default Nav;