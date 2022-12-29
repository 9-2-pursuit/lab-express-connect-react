import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Container } from "react-dom";
function Nav() {

    return (
        <Navbar bg="dark">
            {/* <Link to="/">/logs</Link>{" "} */}
            <Link to="/logs">/logs/:index</Link>{" "} 
            <Link to="/logs/new">New Log</Link>{" "}
        
        </Navbar>
    )

}
export default Nav;