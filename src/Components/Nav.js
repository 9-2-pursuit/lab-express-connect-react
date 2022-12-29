import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Button} from "react-bootstrap";
function Nav() {

    return (
        <Navbar  bg="dark">
            {/* <Link to="/">/logs</Link>{" "} */}
            <Link to="/logs"><Button variant="primary">/logs/:index</Button></Link>{" "} 
            <Link to="/logs/new"><Button variant="success">New Log</Button></Link>{" "}
        
        </Navbar>
    )

}
export default Nav;